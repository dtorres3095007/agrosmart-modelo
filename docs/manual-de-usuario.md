# Manual de usuario

## Modelo económico-financiero AgroSostenible

Este manual explica cómo usar el aplicativo web y el archivo Excel editable del modelo económico-financiero para sistemas productivos de yuca y frijol caupí.

El aplicativo permite consultar la información del proyecto, usar una calculadora de escenarios, revisar indicadores financieros, comparar escenarios y analizar sensibilidad. El Excel contiene el modelo parametrizable completo, con hojas de inversión, costos, ingresos, estados financieros, rentabilidad, punto de equilibrio, recuperación de inversión, capital de trabajo y depreciación.

## 1. Recomendaciones iniciales

Antes de usar el modelo:

- Verifica que los datos productivos, costos y precios correspondan al sistema que quieres analizar.
- Usa valores por hectárea cuando el aplicativo o las tablas indiquen que la información está expresada en 1 ha.
- Conserva una copia del Excel original antes de editarlo.
- En el Excel, modifica principalmente las celdas de entrada. Evita reemplazar fórmulas si no tienes claro qué hojas dependen de ellas.
- Revisa los resultados como apoyo para la toma de decisiones; no reemplazan la validación técnica, agronómica o financiera del proyecto.

## 2. Uso del aplicativo web

### 2.1 Navegación general

El menú principal contiene las siguientes secciones:

| Sección | Uso principal |
| --- | --- |
| Inicio | Vista general del modelo, acceso rápido a la calculadora y resumen del propósito del aplicativo. |
| Proyecto | Explica la metodología, supuestos, escenario base e importancia del modelo para la toma de decisiones. |
| Calculadora | Permite ingresar parámetros productivos, económicos, operativos y de tecnificación para obtener resultados en tiempo real. |
| Resultados | Describe los indicadores financieros que genera el modelo y muestra un ejemplo del escenario 1. |
| Comparación | Compara los escenarios 1, 2 y 3 en términos productivos, económicos, financieros y tecnológicos. |
| Análisis | Presenta el análisis de sensibilidad ante variaciones de precios y riesgos asociados. |
| Guía rápida | Resume el flujo de uso, parámetros, supuestos, alcance, limitaciones y documentos descargables. |

En escritorio, el menú lateral permanece visible. En tablet y móvil se puede abrir y cerrar desde los controles del menú.

### 2.2 Sección Inicio

La pantalla de inicio presenta el contexto del modelo y sus pilares principales. Desde esta sección puedes revisar una introducción rápida y acceder a la calculadora para simular tus propios datos.

### 2.3 Sección Proyecto

Esta sección explica el alcance del modelo económico-financiero:

- Introducción del modelo.
- Metodología utilizada.
- Supuestos productivos, económicos y operativos.
- Escenario 1 o línea base.
- Importancia del modelo para comparar escenarios y apoyar decisiones.

El escenario base representa condiciones iniciales de baja tecnificación. Sus resultados sirven como punto de referencia para comparar mejoras productivas o tecnológicas.

### 2.4 Sección Calculadora

La calculadora se organiza como un formulario por pasos. A medida que ingresas datos, el sistema recalcula los resultados.

#### Paso 1. Parámetros productivos

Permite definir:

- Área cultivada.
- Cultivo principal.
- Cultivo secundario.
- Rendimiento de yuca.
- Rendimiento de frijol caupí.
- Número de ciclos productivos.
- Pérdidas poscosecha.

Estos datos determinan la producción estimada.

#### Paso 2. Parámetros económicos

Permite definir:

- Precio de venta por kg.
- Costos de insumos.
- Costos de transporte.
- Costos administrativos.
- Inflación.
- Tasa de descuento.

Estos datos afectan ingresos, costos proyectados y valor presente de los flujos.

#### Paso 3. Parámetros operativos

Permite definir:

- Tipo de mano de obra.
- Costos de mano de obra.
- Frecuencia de riego.
- Costos de agua.
- Costos de energía.

Estos valores hacen parte de los costos operativos del sistema.

#### Paso 4. Parámetros de tecnificación

Permite registrar inversiones y costos asociados a tecnología e infraestructura:

- Sistema de riego.
- Sistema fotovoltaico.
- Sensores.
- Instalación.
- Mantenimiento.
- Vida útil de activos.

Estos datos afectan la inversión tecnológica, los costos totales, la utilidad, el VAN y el periodo de recuperación.

#### Paso 5. Resultados

Al finalizar, la calculadora muestra:

- Ingresos.
- Costos.
- Utilidad.
- Gráficas de ingresos vs costos.
- Evolución de utilidad.
- Indicadores financieros.
- Comparación del usuario frente al escenario 1.

También permite exportar:

- PDF con el reporte visual, datos ingresados, resultados, gráficas y conclusiones.
- Excel con los datos ingresados, resultados y proyección.

### 2.5 Fórmulas aplicadas en la calculadora web

El aplicativo usa las siguientes fórmulas principales:

| Concepto | Fórmula |
| --- | --- |
| Producción | Área x (rendimiento yuca + rendimiento frijol) x ciclos x (1 - pérdidas poscosecha) |
| Ingresos | Producción x precio de venta |
| Inversión tecnológica | Riego + sistema fotovoltaico + sensores + instalación |
| Costos operativos | Insumos + transporte + administrativos + mano de obra + agua + energía + mantenimiento |
| Costos totales | Costos operativos + inversión tecnológica |
| Utilidad | Ingresos - costos totales |
| Flujo año 1 | Utilidad proyectada año 1 - inversión tecnológica |
| VAN | Suma de flujos proyectados descontados por la tasa de descuento |
| Relación B/C | Ingresos / costos totales |
| Punto de equilibrio | Costos totales / ingresos |
| Payback | Primer año en que el flujo acumulado recupera la inversión |

Las proyecciones se realizan sobre un horizonte de 5 años, aplicando la inflación definida por el usuario.

### 2.6 Sección Resultados

Esta sección ayuda a interpretar los indicadores:

- VAN: valor actual neto del proyecto.
- TIR: rentabilidad esperada del proyecto.
- Relación B/C: cuánto se obtiene por cada unidad monetaria invertida.
- Payback: periodo de recuperación de la inversión.
- Punto de equilibrio: nivel mínimo de ingresos para cubrir costos.

Incluye un ejemplo del escenario 1 o línea base y notas sobre el uso responsable de los resultados.

### 2.7 Sección Comparación

Permite comparar:

- Escenario 1: Línea base.
- Escenario 2: Optimización intermedia.
- Escenario 3: Modernización técnica.

La comparación se organiza en:

- Comparación productiva.
- Comparación económica.
- Comparación de rentabilidad.
- Comparación tecnológica y operativa.
- Visualización comparativa.
- Conclusión general.

En móviles, las tablas se pueden desplazar horizontalmente para revisar todos los escenarios.

### 2.8 Sección Análisis

La sección de sensibilidad muestra cómo cambian los ingresos ante variaciones de precios:

- -20%.
- Precio base.
- +20%.

También presenta interpretación del riesgo y riesgos asociados al sistema productivo. Este apartado sirve para evaluar vulnerabilidad frente a cambios de mercado, clima, operación y disponibilidad de recursos.

### 2.9 Sección Guía rápida

Resume:

- Flujo de uso de la plataforma.
- Parámetros del modelo.
- Supuestos clave.
- Alcance y limitaciones.
- Documentos descargables.

## 3. Uso del archivo Excel editable

Archivo de referencia: `Archivo editables y parametrizables para actualización del modelo.xlsx`.

El Excel es el modelo editable completo. Está organizado por hojas que alimentan cálculos financieros y permiten actualizar supuestos, costos, ingresos e inversiones.

### 3.1 Estructura general del Excel

| Hoja | Función |
| --- | --- |
| INVERSIONES | Registra presupuesto de inversión, activos fijos, inversión diferida y capital de trabajo. |
| CULTIVO | Registra costos de producción del cultivo por hectárea y su equivalencia para áreas mayores. |
| ACOPIO | Proyecta capacidad de acopio, compras, precios, costos de acopiado e ingresos mensuales. |
| MEMORIA COSTOS | Consolida la proyección mensual de costos fijos, variables y gastos. |
| COSTOS TOTALES | Resume costos fijos, variables y costos totales por año. |
| INGRESOS | Proyecta ingresos anuales y ventas mensuales por presentación. |
| ESTADO RESULTADOS | Presenta el estado de resultados proyectado a 5 años. |
| RENTABILIDAD | Calcula flujo neto de efectivo e indicadores financieros del proyecto. |
| PUNTO EQUILIBRIO | Calcula ventas, costos y punto de equilibrio anual. |
| REC | Calcula el periodo de recuperación de la inversión. |
| CAPITAL TRABAJO | Estima necesidades de capital de trabajo mensual. |
| DEPREC | Calcula depreciación, amortización y valor residual de activos. |

### 3.2 Flujo recomendado para actualizar el Excel

1. Actualiza primero las inversiones en la hoja `INVERSIONES`.
2. Ajusta los costos productivos en `CULTIVO`.
3. Revisa compras, precios y volúmenes en `ACOPIO`.
4. Valida costos mensuales en `MEMORIA COSTOS`.
5. Revisa los ingresos proyectados en `INGRESOS`.
6. Comprueba que `COSTOS TOTALES` y `ESTADO RESULTADOS` se actualicen correctamente.
7. Consulta los indicadores en `RENTABILIDAD`, `PUNTO EQUILIBRIO` y `REC`.
8. Revisa `DEPREC` cuando cambien activos, vida útil o valores residuales.

### 3.3 Hojas de entrada y parametrización

#### INVERSIONES

Usa esta hoja para registrar:

- Activos fijos.
- Cantidades.
- Costos unitarios.
- Costo total.
- Distribución entre programa y socios.
- Inversión diferida.
- Capital de trabajo.

La hoja calcula totales multiplicando cantidad por costo unitario y consolidando subtotales.

#### CULTIVO

Usa esta hoja para actualizar costos de producción:

- Preparación de suelos.
- Siembra.
- Fertilización.
- Labores culturales.
- Cosecha.
- Otros costos productivos.

El modelo calcula subtotales y puede escalar valores de 1 hectárea a un área mayor.

#### ACOPIO

Usa esta hoja para revisar:

- Compras mensuales en toneladas.
- Precio de compra.
- Costos de acopiado.
- Presentaciones y ventas mensuales.
- Proyección anual con crecimiento.

Esta hoja alimenta ingresos y parte de la operación mensual.

#### MEMORIA COSTOS

Consolida costos mensuales, entre ellos:

- Mano de obra.
- Administración.
- Servicios.
- Mantenimiento.
- Ventas.
- Costos variables.

Los totales de esta hoja alimentan `COSTOS TOTALES`.

### 3.4 Hojas de cálculo y resultados

#### COSTOS TOTALES

Resume costos por año:

- Costos fijos.
- Costos variables.
- Costos totales.

Esta hoja toma información desde `MEMORIA COSTOS` y aplica proyección anual.

#### INGRESOS

Proyecta ventas anuales por producto. En el archivo revisado, los ingresos crecen anualmente aplicando una tasa de crecimiento del 5%.

#### ESTADO RESULTADOS

Presenta:

- Ingresos por ventas.
- Costos de producción.
- Utilidad bruta.
- Gastos de administración y ventas.
- Utilidad de operación.
- Utilidad antes y después de impuestos, según la estructura del archivo.

#### RENTABILIDAD

Calcula:

- Inversión inicial.
- Ingresos y egresos totales.
- Flujo neto de efectivo.
- Indicadores financieros.
- Valor de rescate y recuperación de capital de trabajo cuando aplique.

Esta hoja es clave para evaluar la viabilidad financiera.

#### PUNTO EQUILIBRIO

Calcula:

- Ventas.
- Costos fijos.
- Costos variables.
- Costos totales.
- Punto de equilibrio en pesos.
- Punto de equilibrio porcentual.

#### REC

Muestra el periodo de recuperación de la inversión a partir del flujo actualizado y el saldo acumulado.

#### CAPITAL TRABAJO

Estima ingresos, egresos, flujo mensual y efectivo acumulado para determinar necesidades de capital de trabajo.

#### DEPREC

Calcula:

- Costo total de activos.
- Vida útil.
- Depreciación anual.
- Depreciación acumulada del periodo.
- Valor residual.

### 3.5 Celdas que se deben editar con cuidado

En general:

- Edita conceptos, cantidades y costos unitarios en hojas de entrada.
- Evita editar celdas con fórmulas, especialmente en hojas de resultados.
- Si agregas una nueva fila de costos o activos, copia la fórmula de una fila similar.
- Después de editar, revisa que los subtotales sigan incluyendo la nueva fila.
- No cambies nombres de hojas sin actualizar las fórmulas dependientes.

### 3.6 Validación después de actualizar el Excel

Después de modificar el archivo:

1. Revisa que no existan errores como `#REF!`, `#DIV/0!`, `#VALUE!` o `#NAME?`.
2. Verifica que `INGRESOS` tenga valores coherentes para los 5 años.
3. Verifica que `COSTOS TOTALES` consolide costos fijos y variables.
4. Revisa que `ESTADO RESULTADOS` muestre utilidad coherente.
5. Consulta `RENTABILIDAD` para validar el flujo neto y los indicadores.
6. Revisa `PUNTO EQUILIBRIO` para asegurar que ventas y costos estén conectados.
7. Valida `REC` para conocer el periodo de recuperación.

## 4. Relación entre aplicativo y Excel

El aplicativo web funciona como una interfaz simplificada para consultar, simular y comunicar resultados. El Excel funciona como el modelo completo editable.

| Elemento | Aplicativo web | Excel |
| --- | --- | --- |
| Uso principal | Simular, visualizar y exportar resultados rápidamente. | Parametrizar y auditar el modelo completo. |
| Usuario objetivo | Usuario final, equipo técnico, tomadores de decisión. | Analista o responsable de actualización del modelo. |
| Nivel de detalle | Sintético y visual. | Detallado y editable. |
| Resultados | Indicadores, gráficos, comparación y sensibilidad. | Estados, flujos, rentabilidad, punto de equilibrio y recuperación. |
| Riesgo al editar | Bajo, porque se editan campos controlados. | Medio, porque puede alterarse una fórmula o vínculo entre hojas. |

## 5. Exportación y documentación

Desde la calculadora del aplicativo:

- Usa `Exportar PDF` para generar un reporte visual con datos ingresados, resultados, gráficas y conclusiones.
- Usa `Exportar Excel` para descargar los datos de entrada, resultados y proyecciones calculadas en la sesión.

Desde el Excel completo:

- Guarda una copia con fecha antes de hacer cambios mayores.
- Usa nombres de archivo que indiquen versión, escenario o fecha.
- Documenta supuestos modificados, fuentes de precios y cambios de costos.

## 6. Preguntas frecuentes

### ¿Por qué los resultados del aplicativo pueden no coincidir exactamente con el Excel completo?

Porque el aplicativo usa una versión simplificada y controlada del cálculo, mientras que el Excel contiene más hojas, partidas, vínculos y supuestos detallados. Para análisis detallado o auditoría, usa el Excel. Para simulación rápida y comunicación, usa el aplicativo.

### ¿Qué pasa si ingreso un valor en cero?

El aplicativo recalcula con ese valor. En el Excel, algunos ceros pueden afectar fórmulas de rentabilidad, punto de equilibrio o recuperación. Revisa que el cero represente una condición real y no un dato faltante.

### ¿Qué indicador debo mirar primero?

Para una lectura rápida:

- Utilidad: muestra margen operativo del escenario.
- VAN: indica si los flujos descontados generan valor.
- Relación B/C: muestra retorno por unidad monetaria invertida.
- Payback: indica recuperación de la inversión.
- Punto de equilibrio: muestra el mínimo necesario para cubrir costos.

### ¿Cómo sé si un escenario es mejor?

Un escenario suele ser más atractivo si combina:

- Mayor utilidad.
- VAN positivo y superior.
- Relación B/C mayor a 1.
- Menor punto de equilibrio.
- Recuperación de inversión en menos tiempo.
- Riesgos técnicos y operativos controlables.

## 7. Buenas prácticas

- Trabaja siempre con una copia del Excel.
- Registra la fuente de precios, costos y rendimientos utilizados.
- No compares escenarios con supuestos inconsistentes.
- Revisa sensibilidad ante cambios de precios.
- Usa los resultados como insumo para discusión técnica, no como decisión automática.
- Exporta reportes cuando cierres una versión de análisis.

