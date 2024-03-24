import fs from "fs";
import matter from "gray-matter";
import path from "path";
// import remarkHtml from "remark-html/lib";
// import remark from "remark"

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  console.log(postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    console.log(matterResult);
    return {
      id,
      ...matterResult.data,
      //content: remark().use(remarkHtml).processSync(matterResult.content).toString()
    };
  });
  return allDocuments.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
    return 0;
  });
}
