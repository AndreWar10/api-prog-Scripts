use dados221n;

CREATE TABLE ENG(
	eng_codigo int primary key auto_increment,
    eng_nome varchar(30),
    eng_apelido varchar(15),
    eng_telefone varchar(15),
    eng_crea varchar(6),
    eng_dtformatura varchar(10) 
);

CREATE TABLE OBR(
	obr_codigo int primary key auto_increment,
    obr_cidade varchar(20),
    obr_tipo varchar(10),
    obr_valor numeric(12,2),
    obr_inicioobra varchar(10),
    eng_codigo int,
    foreign key (eng_codigo) references ENG(eng_codigo)
);

insert into eng (eng_nome, eng_apelido, eng_telefone, eng_crea, eng_dtformatura) 
values ('Andre Guerra Santos', 'Dede', '16992062879','123456', '31/11/2020');

insert into eng ( eng_nome, eng_apelido, eng_telefone, eng_crea, eng_dtformatura) 
values ('Brunin Jr da Silva Santos', 'Ney', '16998547584','528456', '12/07/2015');

insert into eng (eng_nome, eng_apelido, eng_telefone, eng_crea, eng_dtformatura) 
values ('Julia de Moraes', 'Juju', '168954875','225154', '31/09/2000');

insert into eng (eng_nome, eng_apelido, eng_telefone, eng_crea, eng_dtformatura) 
values ('Raquel da Silva Santos', 'Raque', '168954875','748516', '24/11/1994');

-- insert obr
insert into obr  (obr_cidade, obr_tipo, obr_valor, obr_inicioobra, eng_codigo)
values ('Franca', 'Casa', 350000.00 , '03/11/2018', 1);

insert into obr  (obr_cidade, obr_tipo, obr_valor, obr_inicioobra, eng_codigo)
values ('Rio de Janeiro', 'Escola', 550000.00 , '05/07/2021', 2);

insert into obr  (obr_cidade, obr_tipo, obr_valor, obr_inicioobra, eng_codigo)
values ('Claraval', 'Barracao', 85000.00 , '24/05/2013', 3);
















