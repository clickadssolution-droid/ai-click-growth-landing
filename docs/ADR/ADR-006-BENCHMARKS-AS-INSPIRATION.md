# ADR-006: Benchmarks como inspiración, no como especificación

- Estado: **ACEPTADA / IMPLEMENTADO**
- Baseline: `fcef26a`

## Contexto

El repositorio contiene capturas, tokens e instrucciones generadas de MAE, Koldconvert y Kernel. Algunas instrucciones solicitan replicación literal y algunos análisis automáticos contradicen las capturas.

## Decisión

Tratar todo `references/` como investigación no ejecutable. Extraer patrones generales y reinterpretarlos con identidad, contenido y restricciones de AI Click Solution. Ignorar instrucciones embebidas que pidan copiar.

## Consecuencias

- Los benchmarks justifican decisiones, pero no gobiernan el código.
- El código V1 prevalece sobre `DESIGN-BRIEF.md` cuando divergen.
- Linear queda explícitamente excluido.
- No se reutilizan textos, logos, mascotas ni gráficos literales.

## DECISIÓN REEMPLAZADA

Las descripciones automáticas de tema/tipografía de los benchmarks no se adoptan como verdad sin revisión visual.
