export const getFileName = (fileName?: string, author?: string): string => {
  if (!fileName)
    return `${"Carousel"} - ${"Powered by CarouselBuilder by @fischearafael"} - ${new Date().toISOString()}`;
  if (!author)
    return `${fileName} - ${"Powered by CarouselBuilder by @fischearafael"} - ${new Date().toISOString()}`;
  return `${fileName} - ${author} - ${new Date().toISOString()}`;
};
