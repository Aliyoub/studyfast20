<!-- 
gh auth login
gh auth logout
 -->


<!-- Pour lancer l'application -->
npx next dev

<!-- j'automatise mes commits -->
sudo rm -rf .next
npx next build
git add .
git commit -m "another commit"
git push

<!-- A spécifier sur Vercel -->
https://github.com/Aliyoub/studyfast
<!-- Vérification du déploiement -->
https://vercel.com/aliyoubs-projects/studyfast/deployments



=======================
https://nextjs.org/docs/app/api-reference/next-config-js/serverExternalPackages