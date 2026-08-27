import { describe, expect, it } from "vitest";
import { verificarConcluido } from "@/utils/verificar-concluido";

describe('verificarConcluido', () => {
    it('deve verificar se o funcionário concluiu com êxito o treinamento dependendo da nota do cara ai', () => {
        const resultado = verificarConcluido(7)
        
        expect(resultado).toBe(true)
    })
})