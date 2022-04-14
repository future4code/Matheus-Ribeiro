# Exercícios de Introdução SQL

### Exercício 1

**a)**
Deleta a coluna salary da tabela Actors

**b)**
Altera o nome da coluna "gender" para "sex" com o tipo VARCHAR(6)

**c)**
Altera o tipo da coluna gender para VARCHAR(255) aumentando o numero de caracteres

**d)**
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

**a)**
```sql
UPDATE Actor SET 
	name = "Moacyr Franco", 
	birth_date = "1978/10/21"
WHERE id = "003";
```

**b)**

```sql
UPDATE Actor SET
	name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

**c)**
```sql
UPDATE Actor SET
	name = "Cauã Reymond",
    salary = "700000",
    birth_date = "1989/08/12",
    gender = "male"
WHERE id = "005";
```

**d)**
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0, Não teve nenhuma row afetada porque o id procurado não existe

### Exercício 3

**a)**
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

**b)**
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

### Exercício 4

**a)**
```sql
SELECT MAX(salary) FROM Actor
```

**b)**
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

**c)**
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

**d)**
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

**a)**
Mostra a quantidade de atores homens e mulheres agrupados por gênero.

**b)**
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

**c)**
```sql
SELECT * FROM Actor
ORDER BY salary;
```	

**d)**
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

**e)**
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

**a)**
```sql
ALTER TABLE Movies ADD playing_limit_date DATE;
```

**b)**
```sql
ALTER TABLE Movies CHANGE rating rating FLOAT;
``` 

**c)**
```sql
UPDATE Movies
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```

**d)**
```sql
UPDATE Movies
SET
    playing_limit_date = "2020-12-31"
WHERE id = "001"
```

**e)**
```sql
DELETE FROM Movies WHERE id = "001";
```