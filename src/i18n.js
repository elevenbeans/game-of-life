'use strict';

var LOCALES = {
  en: {
    title: 'Game of Life',
    subtitle: 'Conway\'s cellular automaton',
    aboutHeading: 'About Conway\u2019s Game of Life',
    aboutP1: (
      'The Game of Life is a cellular automaton devised by the British mathematician ' +
      'John Horton Conway in 1970. It is a zero-player game \u2014 its evolution is ' +
      'determined by its initial state, requiring no further input. Each cell on a ' +
      'two-dimensional grid interacts with its eight neighbors according to four ' +
      'simple rules, producing complex, often unpredictable patterns that can mimic ' +
      'living systems: birth, death, competition, and even reproduction.'
    ),
    aboutP2: (
      'Despite its simplicity, Life is Turing complete \u2014 it can simulate any ' +
      'computation that a conventional computer can. Enthusiasts have built working ' +
      'counters, clocks, logic gates, and even a complete CPU within the Life ' +
      'universe, making it a cornerstone of computational theory and artificial ' +
      'life research.'
    ),
    ruleBirth: 'Birth',
    ruleSurvival: 'Survival',
    ruleDeath: 'Death',
    ruleBirthDesc: (
      'A dead cell with exactly three live neighbors becomes alive.'
    ),
    ruleSurvivalDesc: (
      'A live cell with two or three live neighbors stays alive.'
    ),
    ruleDeathDesc: (
      'A live cell with fewer than two (underpopulation) or more than three ' +
      '(overpopulation) live neighbors dies.'
    ),
    glider: 'Glider',
    smallExploder: 'Small Exploder',
    row10: '10-cell Row',
    trio: 'Trio',
    pause: 'Pause',
    resume: 'Resume'
  },
  zh: {
    title: '\u751F\u547D\u6E38\u620F',
    subtitle: '\u5EB7\u5A01\u7684\u7EC6\u80DE\u81EA\u52A8\u673A',
    aboutHeading: '\u5173\u4E8E\u5EB7\u5A01\u751F\u547D\u6E38\u620F',
    aboutP1: (
      '\u751F\u547D\u6E38\u620F\uFF08Game of Life\uFF09\u662F\u82F1\u56FD\u6570\u5B66\u5BB6' +
      '\u7EA6\u7FF0\u00B7\u4F55\u987F\u00B7\u5EB7\u5A01\u4E8E 1970 \u5E74\u53D1\u660E\u7684' +
      '\u7EC6\u80DE\u81EA\u52A8\u673A\u3002\u5B83\u662F\u4E00\u79CD\u96F6\u73A9\u5BB6\u6E38' +
      '\u620F\u2014\u2014\u5176\u6F14\u5316\u5B8C\u5168\u7531\u521D\u59CB\u72B6\u6001\u51B3' +
      '\u5B9A\uFF0C\u65E0\u9700\u8FDB\u4E00\u6B65\u5E72\u9884\u3002\u6BCF\u4E2A\u7EC6\u80DE' +
      '\u4E0E\u5468\u56F4\u516B\u4E2A\u90BB\u5C45\u76F8\u4E92\u4F5C\u7528\uFF0C\u9075\u5FAA' +
      '\u56DB\u6761\u7B80\u5355\u89C4\u5219\uFF0C\u5374\u80FD\u4EA7\u751F\u590D\u6742\u4E14' +
      '\u5E38\u5E38\u96BE\u4EE5\u9884\u6D4B\u7684\u6A21\u5F0F\uFF0C\u6A21\u62DF\u51FA\u751F' +
      '\u547D\u822C\u7684\u7CFB\u7EDF\uFF1A\u51FA\u751F\u3001\u6B7B\u4EA1\u3001\u7ADE\u4E89' +
      '\uFF0C\u751A\u81F3\u7E41\u6B96\u3002'
    ),
    aboutP2: (
      '\u5C3D\u7BA1\u89C4\u5219\u7B80\u5355\uFF0C\u751F\u547D\u6E38\u620F\u56FE\u7075' +
      '\u5B8C\u5907\u2014\u2014\u5B83\u53EF\u4EE5\u6A21\u62DF\u4EFB\u4F55\u4F20\u7EDF' +
      '\u8BA1\u7B97\u673A\u80FD\u8FDB\u884C\u7684\u8BA1\u7B97\u3002\u7231\u597D\u8005' +
      '\u4EEC\u5DF2\u5728\u751F\u547D\u5B87\u5B99\u4E2D\u6784\u5EFA\u4E86\u53EF\u5DE5' +
      '\u4F5C\u7684\u8BA1\u6570\u5668\u3001\u65F6\u949F\u3001\u903B\u8F91\u95E8\uFF0C' +
      '\u751A\u81F3\u5B8C\u6574\u7684 CPU\uFF0C\u4F7F\u5176\u6210\u4E3A\u8BA1\u7B97' +
      '\u7406\u8BBA\u548C\u4EBA\u5DE5\u751F\u547D\u7814\u7A76\u7684\u57FA\u77F3\u3002'
    ),
    ruleBirth: '\u51FA\u751F',
    ruleSurvival: '\u5B58\u6D3B',
    ruleDeath: '\u6B7B\u4EA1',
    ruleBirthDesc: (
      '\u4E00\u4E2A\u6B7B\u7EC6\u80DE\u6070\u597D\u6709\u4E09\u4E2A' +
      '\u6D3B\u90BB\u5C45\u65F6\uFF0C\u53D8\u4E3A\u6D3B\u7EC6\u80DE\u3002'
    ),
    ruleSurvivalDesc: (
      '\u4E00\u4E2A\u6D3B\u7EC6\u80DE\u6709\u4E24\u4E2A\u6216\u4E09' +
      '\u4E2A\u6D3B\u90BB\u5C45\u65F6\uFF0C\u7EE7\u7EED\u5B58\u6D3B\u3002'
    ),
    ruleDeathDesc: (
      '\u4E00\u4E2A\u6D3B\u7EC6\u80DE\u5C11\u4E8E\u4E24\u4E2A\uFF08' +
      '\u5B64\u7ACB\uFF09\u6216\u591A\u4E8E\u4E09\u4E2A\uFF08\u62E5' +
      '\u6324\uFF09\u6D3B\u90BB\u5C45\u65F6\uFF0C\u6B7B\u4EA1\u3002'
    ),
    glider: '\u6ED1\u7FD4\u673A',
    smallExploder: '\u5C0F\u578B\u7206\u70B8',
    row10: '\u5341\u683C\u884C',
    trio: '\u4E09\u8FDE',
    pause: '\u6682\u505C',
    resume: '\u7EE7\u7EED'
  }
};

export default LOCALES;
