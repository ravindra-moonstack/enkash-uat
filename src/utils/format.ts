export const stripHtml = (html: string) => {
    return html ? html.replace(/<[^>]*>?/gm, '') : '';
};
