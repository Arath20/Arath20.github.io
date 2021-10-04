#Mi logica era que los valores de gucci los multiplique 
#por el valor de numero, pero solo los muestra dos veces
# :(
gucci = [[1,3,2],[3,4,5],[5,6,7]]
for x in gucci:
    print (x)
numero = input("insertar número")
numero = int (numero)
gucci = gucci * numero
print (gucci) 
