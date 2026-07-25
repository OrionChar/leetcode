import { describe, it, expect } from 'vitest';
import convert from './6-zigzag-conversion';

describe('Zigzag Conversion', () => {
  // Стандартные сценарии из условий задачи
  describe('Base Examples', () => {
    it('should convert "PAYPALISHIRING" with 3 rows', () => {
      expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    });

    it('should convert "PAYPALISHIRING" with 4 rows', () => {
      expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    });
  });

  // Крайние случаи (Edge Cases)
  describe('Edge Cases', () => {
    it('should handle numRows = 1', () => {
      expect(convert('ABCDE', 1)).toBe('ABCDE');
    });

    it('should handle single character string', () => {
      expect(convert('A', 1)).toBe('A');
      expect(convert('A', 5)).toBe('A');
    });

    it('should handle empty string', () => {
      expect(convert('', 3)).toBe('');
    });

    it('should return original string if numRows is greater than string length', () => {
      expect(convert('AB', 4)).toBe('AB');
    });

    it('should return original string if numRows equals string length', () => {
      expect(convert('ABC', 3)).toBe('ABC');
    });
  });

  // Специфические сценарии и структура
  describe('Structural Scenarios', () => {
    it('should handle numRows = 2 (simple alternating zigzag)', () => {
      expect(convert('ABCDEF', 2)).toBe('ACEBDF');
    });

    it('should preserve spaces and punctuation if they are part of the string', () => {
      expect(convert('A B C D', 2)).toBe('ABCD   ');
    });
  });
});

