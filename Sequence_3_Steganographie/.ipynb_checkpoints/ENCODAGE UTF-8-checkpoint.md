# ENCODAGE UTF-8



## Corrigé exercices du notebook  + exemples introductifs



### UTF-16 (entête de fichier)

BE (GB) FE FF

LE (PB) FF FE



### UTF-32 (entête de fichier)

BE (GB) 00 00 FE FF

LE (PB) FF FE 00 00



### UTF-8 : INTRODUCTION

**è : 0xE8 point de code UNICODE**

En binaire 1110 1000 : nécessité de 8 bits donc 2 octets en UTF-8

**110**0 0011 **10**10 1000 : entête en gras

En hexadécimal : 0x C3A8 en UTF-8



**µ codé en UTF-8  0xC2B5**

**110**0 0010 **10**11 0101

Après suppression des entêtes et des 0 de tête inutiles : 1011 0101 soit 0x B5 point de code UNICODE



### Exercices du notebook

0x61 : 0110 0001 : nécessité de 7 bits donc 1 octet en UTF-8 (ASCII)



0xE0 : 1110 0000 : nécessité de 8 bits donc 2 octets en UTF-8

UTF-8 : **110**0 0011 **10**10 0000 soit 0x C3A0



0x3B1: 11 1011 1110 : nécessité de 10 bits donc 2 octets en UTF-8

UTF-8 : **110**0 1110 1011 0001 soit 0x CEB1



0x262F : 10 0110 0010 1111 : 14 bits donc 3 octets en UTF-89

UTF-8 : **1110** 0010 1001 1000 1010 1111 soit 0x E298AF



€ : 0x E2 82 AC en UTF-8 quel est son point de code ?

**1110** 0010 **10**00 0010 **10**10 1100

Après suppression des entêtes : 1000 0010 1010 1100 soit 0x 20AC point de code UNICODE



û : 0x C3 BB en UTF-8 quel est son point de code ?

**110**0 0011 **10**11 1011

Après suppression des entêtes : 1111 1011soit 0x FB point de code UNICODE



### Devoir

µ : 0xB5 nécessite 2 octets **110**0 0010 **10**11 0101 soit 0x C2B5



@ : 0x40 nécessite 1 octet soit 0x40



À : 0xC0 nécessite 2 octets **110**0 0011 **10**00 0000 soit 0xC380



C399 : **110**0 0011 **10**01 1001 apès suppression des entêtes : 1101 1001 soit 0xD9 qui correspond au caractère UNICODE Ù

