# 🌡️ Conversor de Temperatura - Angular

Aplicación web para convertir temperaturas entre diferentes escalas, desarrollada con Angular 18 (standalone components) y formularios reactivos.

## 📸 Capturas de Pantalla

### Vista Principal
![Vista Principal](docs/screenshots/vista-principal.png)
*Interfaz principal del conversor de temperatura*

### Conversión Celsius a Fahrenheit
![Celsius a Fahrenheit](docs/screenshots/celsius-fahrenheit.png)
*Ejemplo de conversión de 25°C a 77°F*

### Conversión Fahrenheit a Celsius
![Fahrenheit a Celsius](docs/screenshots/fahrenheit-celsius.png)
*Ejemplo de conversión de 100°F a 37.78°C*

### Validación de Errores
![Validación](docs/screenshots/validacion.png)
*Sistema de validación de campos*

### Vista Responsive
![Responsive](docs/screenshots/responsive.png)
*Diseño adaptable a diferentes dispositivos*

## 🎯 Características

- ✅ Conversión entre **8 escalas de temperatura**:
  - **Celsius (°C)** - Escala métrica estándar
  - **Fahrenheit (°F)** - Escala imperial
  - **Kelvin (K)** - Escala absoluta científica
  - **Rankine (°R)** - Escala absoluta basada en Fahrenheit
  - **Réaumur (°Ré)** - Escala histórica europea
  - **Delisle (°De)** - Escala invertida histórica
  - **Newton (°N)** - Escala de Isaac Newton
  - **Rømer (°Rø)** - Escala danesa histórica

- 🎨 Interfaz limpia y responsive
- ✨ Validación de formularios en tiempo real
- 🔄 Conversión precisa con redondeo a 2 decimales
- ♿ Accesible y semántica
- 🧪 Cobertura con pruebas unitarias

## 🚀 Inicio Rápido

### Requisitos previos
- Node.js (v18 o superior)
- npm o yarn

### Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/cifpfbmoll/conversor-de-temperatura-con-angular-Diegoqb98.git
cd conversor-de-temperatura-con-angular-Diegoqb98/conversor-temperatura

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Otros comandos útiles

```bash
# Compilar para producción
npm run build

# Ejecutar pruebas unitarias
npm test

# Compilar en modo watch
npm run watch
```

## 📖 Documentación

La documentación completa del proyecto está en la carpeta `docs/`:

- 📋 [Guía de uso](docs/guia-uso.md) - Cómo utilizar el conversor
- 🏗️ [Arquitectura](docs/arquitectura.md) - Diseño y estructura del proyecto
- ✅ [Criterios de aceptación](docs/criterios-aceptacion.md) - Requisitos funcionales
- 🧪 [Pruebas](docs/pruebas.md) - Estrategia de testing
- 🔧 [Troubleshooting](docs/troubleshooting.md) - Solución de problemas
- 📝 [Changelog](docs/changelog.md) - Historial de cambios
- 🎯 [Backlog](docs/backlog.md) - Mejoras futuras

## 🛠️ Tecnologías

- **Angular 18** - Framework principal
- **TypeScript 5.5** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **Jasmine/Karma** - Testing unitario
- **Standalone Components** - Arquitectura modular sin NgModules

## 📁 Estructura del Proyecto

```
conversor-temperatura/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── temperature.service.ts    # Lógica de conversión
│   │   ├── features/
│   │   │   └── converter/                # Componente principal
│   │   ├── app.component.ts              # Componente raíz
│   │   └── app.config.ts                 # Configuración de la app
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── docs/                                  # Documentación completa
├── angular.json
└── package.json
```

## 👨‍💻 Autor

**Diego Quintana**
- GitHub: [@Diegoqb98](https://github.com/Diegoqb98)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

Generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21
