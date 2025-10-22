import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  {
    branch: "gh-pages",
    repo: "https://github.com/im-ivan/myblog.git",
    message: "Deploy do Vite para GitHub Pages",
    force: true,
  },
  (err) => {
    if (err) {
      console.error("Erro no deploy:", err);
    } else {
      console.log("✅ Deploy realizado com sucesso!");
    }
  }
);
