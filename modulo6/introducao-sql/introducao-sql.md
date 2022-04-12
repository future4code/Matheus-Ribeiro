# Exercícios de Introdução SQL

### Exercício 1

**a)**
**CREATE TABLE** - Cria uma nova tabela
**PRIMARY KEY** - Indica uma chave primária
**VARCHAR** - Abreviação para Variable-length Character. Indica a variação possível de caracteres da string a ser passada. O valor vai entre parenteses, no caso do id e do nome, essa variação é de até 255 caracteres.
**NOT NULL** - Garante que a coluna com essa restrição não irá receber valores nulos (NULL).
**DATE** - Indica que o valor dessa coluna será uma data.

**b)**
**SHOW DATABASES** - Mostra uma lista de base de dados no MySQL;
**SHOW TABLES** - Mostra uma lista de tabelas em uma base de dados do MySQL;

**c)**
Ao chamar o **DESCRIBE** Nome_da_tabela, o MySQL Workbench exibe as informações da tabela com os nomes das colunas, o tipo, se a informação pode ou não ser nula, o tipo de chave e o valor padrão, tudo de acordo como o que foi definido ao criar a tabela.

### Exercício 2

**a)**
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

**b)**
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'.

**c)**
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1, faltou especificar os parâmetros os parametros birth_date e gender.

**d)**
Código de erro: 1364. O campo 'nome' não tem um valor padrão, faltou passar o parâmetro name e um valor que não pode ser nulo.

**e)**
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1, o campo data precisa ser entre aspas.

**f)**
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
```
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
    "004",
    "Antonio Fagundes",
    400000,
    "1949-04-18",
    "male"
);
```
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
);
```

### Exercício 3

**a)**
```sql
SELECT * FROM Actor WHERE gender = "female"
```

**b)**
```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

**c)**
```sql
SELECT * FROM Actor WHERE gender = "invalid";
```
Retornou uma tabela com todos os dados "null". Provavelmente porque o gênero tem que ser definido.

**d)**
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

**e)**
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos', não reconheceu o campo "nome" porque na verdade é "name".

### Exercício 4

**a)**
Seleciona todos o atores da tabela Ator desde que o nome se inicie com a letra A ou J e o salário seja maio que 300000.

**b)**
```sql
SELECT * FROM Actor
WHERE name NOT LIKE A% AND salary > 350000;
```

**c)**
```sql
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";
```

**d)**
```sql
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%" OR name LIKE "%A%" OR "%a%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

**a)**
```sql
CREATE TABLE Movies (
    id VARCHAR(25) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL 
);
```

**b)**
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);
```

**c)**
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos     sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    7
);
```

**d)**
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);
```

**e)**
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
    "004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000/09/15",
    9.5
);
```

### Exercício 6 

**a)**
```sql
SELECT id, name, rating FROM Movies WHERE id = "004";
```

**b)**
```sql
SELECT * FROM Movies WHERE name = "Dona Flor e Seus Dois Maridos"
```

**c)**
```sql
SELECT id, name, synopsis FROM Movies WHERE rating >= 7;
```

### Exercício 7

**a)**
```sql
SELECT * FROM Movies WHERE name LIKE "%vida%";
```

**b)**
```sql
SELECT * FROM Movies WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";
```

**c)**
```sql
SELECT * FROM Movies WHERE release_date < CURDATE();
```

**d)**
```sql
SELECT * FROM Movies 
WHERE release_date < CURDATE() AND 
(name LIKE "%vida%" or synopsis LIKE "%vida%") AND rating > 7 
```
