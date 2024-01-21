for develop

```
shell
yarn
yarn start
```

for build

```
shell


rm -rf  ./icons/ ./page-data/  ./static/  \_gatsby/ \~partytown/

rm *

cd gatsby/

yarn clean
yarn build

cd ../

mv gatsby/public/\* .
```
