/**
 * @ 模版多空格处理.
 */
export const tplManySpaceProc = (text) => {
    return text.replace(/\s{6,}/g, '');
};
