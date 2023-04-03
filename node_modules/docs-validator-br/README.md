# Docs Validator BR

Validações de diversos tipos de dados e documentos brasileiros.

## Features

- Validador CPF
- Validador CEP
- Validador E-mail

## Como instalar

Instalação via npm.

```sh
npm i docs-validator-br
```

## Como utilizar

### Validar CPF

```sh
import { isValidCpf } from 'docs-validator-br';
// const { isValidCpf } from 'docs-validator-br';

isValidCpf('01234567890');
isValidCpf('012.345.678-90');
```
### Validar CNPJ

```sh
import { isValidCnpj } from 'docs-validator-br';
// const { isValidCnpj } from 'docs-validator-br';

isValidCnpj('59225871000156');
isValidCnpj('59.225.871/0001-56');
```

### Validar E-mail

```sh
import { isValidEmail } from 'docs-validator-br';
// const { isValidEmail } from 'docs-validator-br';

isValidEmail('teste@teste.com'); 
```

### Validar CEP

```sh
import { isValidCep } from 'docs-validator-br';
// const  { isValidCep } from 'docs-validator-br';

isValidCep('86702210'); 
isValidCep('86702-210'); 
isValidCep('86.702-210'); 
```

## License

MIT

** Aproveite!!! **