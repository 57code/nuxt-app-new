import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, "id") + ".md";

  try {
    // 获取文章内容
    const fullPath = path.join(postsDir, fileName);
    // 判断 fullPath 是否可以访问
    fs.accessSync(fullPath);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    // 解析扉页信息
    const matterInfo = matter(fileContent);

    // 转换markdown为HTML
    const processedContent = await remark()
      .use(html)
      .process(matterInfo.content);
    const content = processedContent.toString() as string;

    return {
      title: matterInfo.data.title as string,
      content,
    };
  } catch (err) {
    // 没有此文件或没有访问权限
    throw createError({
      statusCode: 404,
      message: "文章不存在",
    });
  }
});
