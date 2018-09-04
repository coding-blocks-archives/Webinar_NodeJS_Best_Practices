# Best Practices for a NodeJS Project

## Database Setup

```mysql
create database sampleblogdb;
create user samplebloguser identified by 'sampleblogpass';
grant all privileges on sampleblogdb.* to samplebloguser;
flush privileges;
```

## TODOS

### Security

1. Hash the passwords, do not save as string
2. Use an access control layer to control who can create/edit articles and comments

### Application

1. Create/edit/delete articles and comments

### UI

1. Implement a CSS framework (like Bootstrap) here