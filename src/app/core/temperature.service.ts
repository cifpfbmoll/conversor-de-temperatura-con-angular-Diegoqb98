import { Injectable } from '@angular/core';

// Servicio de dominio para convertir temperaturas entre unidades comunes.
// Mantener la lógica aquí facilita las pruebas unitarias y la reutilización.
@Injectable({ providedIn: 'root' })
export class TemperatureService {
  // Unidades soportadas (escalas comunes e históricas)
  readonly units = [
    'Celsius', 
    'Fahrenheit', 
    'Kelvin', 
    'Rankine', 
    'Réaumur', 
    'Delisle', 
    'Newton', 
    'Rømer'
  ] as const;
  type = '';

  // Convierte cualquier valor a Kelvin (unidad base interna)
  private toKelvin(value: number, from: string): number {
    switch (from) {
      case 'Celsius':
        return value + 273.15;
      case 'Fahrenheit':
        return (value - 32) * (5 / 9) + 273.15;
      case 'Kelvin':
        return value;
      case 'Rankine':
        return value * (5 / 9);
      case 'Réaumur':
        return value * (5 / 4) + 273.15;
      case 'Delisle':
        return 373.15 - value * (2 / 3);
      case 'Newton':
        return value * (100 / 33) + 273.15;
      case 'Rømer':
        return (value - 7.5) * (40 / 21) + 273.15;
      default:
        throw new Error(`Unidad de origen no soportada: ${from}`);
    }
  }

  // Convierte desde Kelvin a la unidad destino
  private fromKelvin(k: number, to: string): number {
    switch (to) {
      case 'Celsius':
        return k - 273.15;
      case 'Fahrenheit':
        return (k - 273.15) * (9 / 5) + 32;
      case 'Kelvin':
        return k;
      case 'Rankine':
        return k * (9 / 5);
      case 'Réaumur':
        return (k - 273.15) * (4 / 5);
      case 'Delisle':
        return (373.15 - k) * (3 / 2);
      case 'Newton':
        return (k - 273.15) * (33 / 100);
      case 'Rømer':
        return (k - 273.15) * (21 / 40) + 7.5;
      default:
        throw new Error(`Unidad de destino no soportada: ${to}`);
    }
  }

  // API pública: convierte entre dos unidades.
  // Redondea a 2 decimales por conveniencia de UI.
  convert(value: number, from: string, to: string): number {
    if (Number.isNaN(value)) {
      throw new Error('Valor numérico inválido');
    }
    const k = this.toKelvin(value, from);
    const result = this.fromKelvin(k, to);
    return Math.round(result * 100) / 100;
  }
}
