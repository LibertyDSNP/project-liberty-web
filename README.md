# Project Liberty Website

## How to Deploy Updates
1. Add complete domain in which you want the site to publish to in the homepage tag on the first level of the package.json file.
  - ex: `"homepage": "https://www-test.projectliberty.io/"`
2. Commit your most recent changes.
3. Deploy your site
  - `npm run deploy`
4. Add your new domain to the github pages custom domain input field.
  - `www-test.projectliberty.io`

## Troubleshooting Deployment
- run `dig www-test.projectliberty.io`, replacing the URL with the one in which you are deploying to, to check that the CNAME is pointing towards your gihub repo.
 - In this case, you will see `www-test.projectliberty.io. 300 IN CNAME libertydsnp.github.io.`.
 - If you do not, you need to add the correct github domain to the domain DNS.
