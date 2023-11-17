class Node {
    constructor(valor) {
        this.valor = valor;
        this.izq = null;
        this.der = null;
    }
}
function insertar(raiz, valor) {
    if (raiz === null) {
        return new Node(valor);
    }
    if (valor < raiz.valor) {
        raiz.izq = insertar(raiz.izq, valor);
    } else if (valor > raiz.valor) {
        raiz.der = insertar(raiz.der, valor);
    }
    return raiz;
}
function inorder(raiz) {
    if (raiz) {
        inorder(raiz.izq);
        console.log(raiz.valor);
        inorder(raiz.der);
    }
}
let raiz = null;
const elementos = [654, 987, 433, 276, 96, 634, 999];
elementos.forEach(elemento => {
    raiz = insertar(raiz, elemento);
});
inorder(raiz);
