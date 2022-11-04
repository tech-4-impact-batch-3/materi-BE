install sequelize cli globally

```bash
npm i -g sequelize-cli
```

<br>

install in local project

```bash
npm install sequelize
```

<br>

install mysql driver

```bash
npm install mysql2
```

<br>

init sequelize in local project

```bash
npx sequelize-cli init
```

<br>

> **_Note:_**
> Perhatikan config di folder config. pastikan data sama dengan database kamu

<br>

create model

```bash
npx sequelize-cli model:generate --name User --attributes email:string,password:string
```

<br>

migrate

```bash
npx sequelize-cli db:migrate
```
