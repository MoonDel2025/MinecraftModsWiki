/**
 * 간단한 마크다운 파서
 * - ## ### 헤더
 * - **볼드**
 * - `인라인 코드`, ``` 코드블록 ```
 * - > 인용
 * - - 리스트, 1. 번호 리스트
 * - | 테이블 |
 * - 단락 (\n\n)
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function parseInline(text: string): string {
  // 볼드 → 인라인 코드 → 링크 순서
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

export function parseMarkdown(input: string): string {
  const lines = input.split('\n');
  const out: string[] = [];

  let i = 0;
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let paraBuffer: string[] = [];

  const flushPara = () => {
    if (paraBuffer.length > 0) {
      out.push(`<p>${parseInline(paraBuffer.join(' '))}</p>`);
      paraBuffer = [];
    }
  };

  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    // 코드 블록
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        out.push(`<pre><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`);
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        flushPara();
        closeList();
        inCodeBlock = true;
      }
      i++;
      continue;
    }
    if (inCodeBlock) {
      codeBuffer.push(line);
      i++;
      continue;
    }

    // 빈 줄 → 단락 종료
    if (line.trim() === '') {
      flushPara();
      closeList();
      i++;
      continue;
    }

    // 헤더
    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      flushPara(); closeList();
      out.push(`<h4>${parseInline(h3[1])}</h4>`);
      i++; continue;
    }
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      flushPara(); closeList();
      out.push(`<h3>${parseInline(h2[1])}</h3>`);
      i++; continue;
    }
    const h1 = line.match(/^# (.+)$/);
    if (h1) {
      flushPara(); closeList();
      out.push(`<h2>${parseInline(h1[1])}</h2>`);
      i++; continue;
    }

    // 인용
    const quote = line.match(/^> (.+)$/);
    if (quote) {
      flushPara(); closeList();
      out.push(`<blockquote><p>${parseInline(quote[1])}</p></blockquote>`);
      i++; continue;
    }

    // 테이블 (헤더 행 + 구분 행 + 데이터 행들)
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?[\s|:-]+\|?\s*$/.test(lines[i + 1])) {
      flushPara(); closeList();
      const headerCells = line.split('|').map(c => c.trim()).filter(c => c.length > 0);
      i += 2; // 구분 행 스킵
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        const cells = lines[i].split('|').map(c => c.trim()).filter(c => c.length > 0);
        rows.push(cells);
        i++;
      }
      const thead = `<thead><tr>${headerCells.map(c => `<th>${parseInline(c)}</th>`).join('')}</tr></thead>`;
      const tbody = `<tbody>${rows.map(r => `<tr>${r.map(c => `<td>${parseInline(c)}</td>`).join('')}</tr>`).join('')}</tbody>`;
      out.push(`<table>${thead}${tbody}</table>`);
      continue;
    }

    // 순서 없는 리스트
    const ul = line.match(/^- (.+)$/);
    if (ul) {
      flushPara();
      if (listType !== 'ul') {
        closeList();
        out.push('<ul>');
        listType = 'ul';
      }
      out.push(`<li>${parseInline(ul[1])}</li>`);
      i++; continue;
    }

    // 순서 있는 리스트
    const ol = line.match(/^\d+\. (.+)$/);
    if (ol) {
      flushPara();
      if (listType !== 'ol') {
        closeList();
        out.push('<ol>');
        listType = 'ol';
      }
      out.push(`<li>${parseInline(ol[1])}</li>`);
      i++; continue;
    }

    // 일반 텍스트 → 단락 버퍼에 누적
    closeList();
    paraBuffer.push(line);
    i++;
  }

  // 마지막 정리
  flushPara();
  closeList();

  return out.join('\n');
}
