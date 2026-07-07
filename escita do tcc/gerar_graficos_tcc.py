"""
Gera os dois gráficos faltantes para o TCC Smart Plantio.
  - grafico-tempo-medio-tarefas.png  (Figura 1)
  - grafico-evolucao-nps.png          (Figura 2)

Execute: python "gerar_graficos_tcc.py"
Requer: pip install matplotlib
"""

import matplotlib
matplotlib.use("Agg")          # sem GUI, só salva arquivo
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "imagens")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# ─────────────────────────────────────────────────────────────────────────────
# DADOS — extraídos das Tabelas 3 e 7 da monografia
# ─────────────────────────────────────────────────────────────────────────────
tarefas = ["T1\nPropriedade", "T2\nTalhão", "T3\nSafra",
           "T4\nCusto", "T5\nGráficos", "T6\nEstoque"]
rodada1 = [103, 130, 176, 191, 38, 125]
rodada2 = [86,  98,  128, 125, 22,  93]

# ─────────────────────────────────────────────────────────────────────────────
# FIGURA 1 — Comparação de tempo médio por tarefa (Rodada 1 vs. Rodada 2)
# ─────────────────────────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(10, 5.5))

n = len(tarefas)
x = np.arange(n)
w = 0.35

bars1 = ax.bar(x - w/2, rodada1, w, label="Rodada 1 (pré-correção)",
               color="#D55E00", edgecolor="white", linewidth=0.8)
bars2 = ax.bar(x + w/2, rodada2, w, label="Rodada 2 (pós-correção)",
               color="#0072B2", edgecolor="white", linewidth=0.8)

# rótulos de valor em cima de cada barra
for bar in bars1:
    ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 3,
            f"{int(bar.get_height())}s", ha="center", va="bottom",
            fontsize=8.5, color="#D55E00", fontweight="bold")
for bar in bars2:
    ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 3,
            f"{int(bar.get_height())}s", ha="center", va="bottom",
            fontsize=8.5, color="#0072B2", fontweight="bold")

# linha de média geral
ax.axhline(127, color="#D55E00", linestyle="--", linewidth=1.2,
           alpha=0.7, label="Média Rodada 1: 127s")
ax.axhline(92,  color="#0072B2", linestyle="--", linewidth=1.2,
           alpha=0.7, label="Média Rodada 2: 92s")

ax.set_xticks(x)
ax.set_xticklabels(tarefas, fontsize=10)
ax.set_ylabel("Tempo médio de execução (segundos)", fontsize=10)
ax.set_xlabel("Tarefas avaliadas", fontsize=10)
ax.set_ylim(0, 230)
ax.legend(fontsize=9, loc="upper right")
ax.spines[["top", "right"]].set_visible(False)
ax.yaxis.grid(True, linestyle=":", color="gray", alpha=0.4)
ax.set_axisbelow(True)

# redução percentual anotada entre as barras de T2, T3, T4 (mais evidentes)
destaques = [(1, "−24,6%"), (2, "−27,3%"), (3, "−34,6%")]
for idx, label in destaques:
    y_top = max(rodada1[idx], rodada2[idx]) + 18
    ax.annotate("", xy=(x[idx] + w/2, rodada2[idx] + 4),
                xytext=(x[idx] - w/2, rodada1[idx] + 4),
                arrowprops=dict(arrowstyle="<->", color="black",
                                lw=0.9, connectionstyle="arc3,rad=0"))
    ax.text(x[idx], y_top, label, ha="center", va="bottom",
            fontsize=7.5, color="black",
            bbox=dict(boxstyle="round,pad=0.2", fc="lightyellow",
                      ec="gray", alpha=0.8))

plt.title("Figura 1 — Comparação de tempo médio por tarefa (Rodada 1 vs. Rodada 2)",
          fontsize=11, pad=12)
plt.tight_layout()

out1 = os.path.join(OUTPUT_DIR, "grafico-tempo-medio-tarefas.png")
fig.savefig(out1, dpi=150, bbox_inches="tight")
plt.close(fig)
print(f"[OK] {out1}")


# ─────────────────────────────────────────────────────────────────────────────
# FIGURA 2 — Evolução do NPS (Rodada 1 → Rodada 2)
# ─────────────────────────────────────────────────────────────────────────────
# Distribuição de participantes (6 no total)
#   Rodada 1: 0 Promotores, 1 Neutro, 5 Detratores  → NPS = 0 − 83,3 = −83,3
#   Rodada 2: 3 Promotores, 2 Neutros, 1 Detrator   → NPS = 50 − 16,7 = +33,3
rodadas   = ["Rodada 1\n(pré-correção)", "Rodada 2\n(pós-correção)"]
promotores = [0.0,  50.0]
neutros    = [16.7, 33.3]
detratores = [83.3, 16.7]
nps_vals   = [-83.3, 33.3]

fig, axes = plt.subplots(1, 2, figsize=(11, 6),
                         gridspec_kw={"width_ratios": [1, 1]})

# ── subplot esquerdo: barras empilhadas com distribuição ────────────────────
ax_bar = axes[0]
x = np.arange(len(rodadas))
w = 0.45

b_det = ax_bar.bar(x, detratores,  w, label="Detratores (0–6)",  color="#CC3311")
b_neu = ax_bar.bar(x, neutros,     w, label="Neutros (7–8)",     color="#DDAA33",
                   bottom=detratores)
b_pro = ax_bar.bar(x, promotores,  w, label="Promotores (9–10)", color="#009E73",
                   bottom=[d + n for d, n in zip(detratores, neutros)])

for i, (d, ne, p) in enumerate(zip(detratores, neutros, promotores)):
    if d  > 0: ax_bar.text(x[i], d/2,        f"{d:.1f}%",  ha="center", va="center", fontsize=10, color="white", fontweight="bold")
    if ne > 0: ax_bar.text(x[i], d + ne/2,   f"{ne:.1f}%", ha="center", va="center", fontsize=10, color="white", fontweight="bold")
    if p  > 0: ax_bar.text(x[i], d + ne + p/2, f"{p:.1f}%", ha="center", va="center", fontsize=10, color="white", fontweight="bold")

ax_bar.set_xticks(x)
ax_bar.set_xticklabels(rodadas, fontsize=10)
ax_bar.set_ylabel("Percentual de participantes (%)", fontsize=10)
ax_bar.set_ylim(0, 115)
ax_bar.spines[["top", "right"]].set_visible(False)
ax_bar.yaxis.grid(True, linestyle=":", color="gray", alpha=0.4)
ax_bar.set_axisbelow(True)
ax_bar.legend(fontsize=9, loc="upper right")
ax_bar.set_title("Distribuição de classificação", fontsize=10, pad=8)

# ── subplot direito: evolução do NPS ────────────────────────────────────────
ax_nps = axes[1]

cores_nps = ["#CC3311", "#009E73"]
bars_nps  = ax_nps.bar(x, nps_vals, w * 1.2, color=cores_nps,
                        edgecolor="white", linewidth=0.8)

for bar, val in zip(bars_nps, nps_vals):
    ypos = val + (4 if val >= 0 else -10)
    ax_nps.text(bar.get_x() + bar.get_width() / 2, ypos,
                f"{val:+.1f}", ha="center", va="bottom" if val >= 0 else "top",
                fontsize=14, fontweight="bold",
                color="#CC3311" if val < 0 else "#009E73")

# seta mostrando a melhoria
ax_nps.annotate(
    f"+116,6 pp\n(melhoria)",
    xy=(1, 33.3), xytext=(0, -83.3),
    arrowprops=dict(arrowstyle="->", color="black",
                    lw=1.5, connectionstyle="arc3,rad=-0.3"),
    fontsize=9, ha="center", va="top",
    bbox=dict(boxstyle="round,pad=0.3", fc="lightyellow", ec="gray", alpha=0.9)
)

ax_nps.axhline(0, color="black", linewidth=0.8)
ax_nps.set_xticks(x)
ax_nps.set_xticklabels(rodadas, fontsize=10)
ax_nps.set_ylabel("Net Promoter Score (NPS)", fontsize=10)
ax_nps.set_ylim(-110, 80)
ax_nps.spines[["top", "right"]].set_visible(False)
ax_nps.yaxis.grid(True, linestyle=":", color="gray", alpha=0.4)
ax_nps.set_axisbelow(True)

# faixas coloridas de referência NPS
ax_nps.axhspan(-100,   0, alpha=0.06, color="red",   label="Zona de Perigo (< 0)")
ax_nps.axhspan(   0,  50, alpha=0.06, color="green", label="Zona de Qualidade (0–50)")
ax_nps.legend(fontsize=8, loc="lower right")
ax_nps.set_title("Evolução do NPS", fontsize=10, pad=8)

fig.suptitle("Figura 2 — Evolução do Net Promoter Score (NPS)\n"
             "Rodada 1 (pré-correção) vs. Rodada 2 (pós-correção)",
             fontsize=11, y=1.01)
plt.tight_layout()

out2 = os.path.join(OUTPUT_DIR, "grafico-evolucao-nps.png")
fig.savefig(out2, dpi=150, bbox_inches="tight")
plt.close(fig)
print(f"[OK] {out2}")

print("\nPronto! Dois arquivos PNG salvos em:", OUTPUT_DIR)
