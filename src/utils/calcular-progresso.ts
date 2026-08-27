export function calcularProgresso(concluido: number, total: number): number {
    const porcentagem = (concluido / total) * 100;

    return Math.min(porcentagem, 100)
}