class Node {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}
function insertar(raiz, valor) {
    if (raiz === null) {
        return new Node(valor);
    }
    if (valor < raiz.valor) {
        raiz.izquierda = insertar(raiz.izquierda, valor);
    } else if (valor > raiz.valor) {
        raiz.derecha = insertar(raiz.derecha, valor);
    }
    return raiz;
}
function inorder(raiz) {
    if (raiz) {
        inorder(raiz.izquierda);
        console.log(raiz.valor);
        inorder(raiz.derecha);
    }
}
let raiz = null;
const elementos = [500, 300, 700, 200, 400, 600, 800];
elementos.forEach(elemento => {
    raiz = insertar(raiz, elemento);
});
inorder(raiz);
