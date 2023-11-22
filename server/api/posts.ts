import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler((event) => {
  const fileNames = fs.readdirSync(postsDir);
  const posts = fileNames.map((fileName) => {
    // 获取文件名作为文章标题
    const id = fileName.replace(/.md$/, "");

    // 获取文章标题和创建日期
    const fullPath = path.join(postsDir, fileName);
    // 读取文章内容
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // 扉页中获取标题信息
    const matterInfo = matter(fileContents);
    // 文件信息中获取创建日期
    const fileInfo = fs.statSync(fullPath);

    return {
      id,
      title: matterInfo.data.title as string,
      date: fileInfo.ctime,
    };
  });
  // 降序排列
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
});
