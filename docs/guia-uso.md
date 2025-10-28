# Guía de uso

## Cómo usar el conversor

1. **Ingresa un valor**: Escribe un número en el campo de valor. Se acepta coma (,) o punto (.) como separador decimal.
2. **Selecciona la unidad origen**: Elige desde qué escala de temperatura quieres convertir.
3. **Selecciona la unidad destino**: Elige hacia qué escala quieres convertir.
4. **Convierte**: El botón "Convertir" se habilitará automáticamente cuando los 3 campos sean válidos. Presiónalo para ver el resultado.
5. **Visualiza el resultado**: El resultado aparecerá debajo del formulario, formateado a 2 decimales.

## Unidades disponibles

El conversor soporta **8 escalas de temperatura** diferentes:

### Escalas Modernas
- **Celsius (°C)**: Escala métrica estándar. El agua se congela a 0°C y hierve a 100°C.
- **Fahrenheit (°F)**: Escala imperial. El agua se congela a 32°F y hierve a 212°F.
- **Kelvin (K)**: Escala absoluta científica. El cero absoluto es 0 K. El agua se congela a 273.15 K.
- **Rankine (°R)**: Escala absoluta basada en Fahrenheit. Usada en ingeniería en EE.UU.

### Escalas Históricas
- **Réaumur (°Ré)**: Escala europea histórica donde el agua se congela a 0° y hierve a 80°.
- **Delisle (°De)**: Escala invertida donde el agua hierve a 0° y se congela a 150°.
- **Newton (°N)**: Escala propuesta por Isaac Newton donde el agua se congela a 0° y hierve a 33°.
- **Rømer (°Rø)**: Escala danesa donde el agua se congela a 7.5° y hierve a 60°.

## Ejemplos de conversión

### Punto de congelación del agua
- 0°C = 32°F = 273.15 K = 491.67°R = 0°Ré = 150°De = 0°N = 7.5°Rø

### Punto de ebullición del agua
- 100°C = 212°F = 373.15 K = 671.67°R = 80°Ré = 0°De = 33°N = 60°Rø

### Temperatura ambiente (aproximada)
- 20°C = 68°F = 293.15 K = 527.67°R = 16°Ré = 120°De = 6.6°N = 18°Rø

## Validaciones

El formulario incluye las siguientes validaciones:
- ✅ El campo de valor debe ser un número válido (entero o decimal)
- ✅ Se debe seleccionar una unidad de origen
- ✅ Se debe seleccionar una unidad de destino
- ✅ El botón "Convertir" solo se habilita cuando todos los campos son válidos

## Tips
- Puedes convertir entre cualquier par de escalas
- Los resultados se redondean a 2 decimales para mayor claridad
- Las conversiones usan Kelvin como unidad base interna para máxima precisión
