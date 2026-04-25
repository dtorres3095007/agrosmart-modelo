# AgroSostenible - Modelo Económico-Financiero

Aplicación web en React para visualizar, calcular y comparar escenarios productivos, económicos y financieros de sistemas agrícolas de yuca y frijol caupi.

## Stack

- React
- Vite
- Tailwind CSS
- Lucide React

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación queda disponible normalmente en:

```bash
http://localhost:5173/
```

## Compilación

```bash
npm run build
```

## Rutas

- `/` - Inicio
- `/proyecto` - Información del proyecto
- `/calculadora` - Calculadora económico-financiera
- `/resultados` - Resultados del modelo
- `/comparacion` - Comparación de escenarios
- `/analisis` - Análisis de sensibilidad
- `/guia-rapida` - Guía rápida del modelo y plataforma

## Estructura

```txt
src/
  assets/
  components/
  constants/
  hooks/
  pages/
  styles/
  utils/
  App.jsx
  main.jsx
```

## Notas

- Los cálculos se realizan en frontend.
- No hay persistencia de datos.
- No hay autenticación.
- La navegación usa rutas internas con `history.pushState`.
