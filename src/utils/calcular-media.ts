export function calcularMedia(notas: number[]): number {
    const soma = notas.reduce((total, nota) => total + nota, 0);

    return soma / notas.length;
}