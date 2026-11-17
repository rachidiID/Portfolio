#!/usr/bin/env bash
# Compile les CV.
#  - export/                : versions FINALES (données manquantes masquées) -> à imprimer / envoyer
#  - export/brouillon/      : versions BROUILLON (données manquantes surlignées en jaune) -> à relire
# Les CV Full-Stack FR et EN sont aussi copiés dans ../public/assets/ (téléchargement depuis le portfolio).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p export/brouillon build ../public/assets

CVS=(CV_Rachidi_IDONIYI_FullStack CV_Rachidi_IDONIYI_DataScience)
[ -f CV_Rachidi_IDONIYI_FullStack_EN.tex ] && CVS+=(CV_Rachidi_IDONIYI_FullStack_EN)

for f in "${CVS[@]}"; do
  latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=build/final "$f.tex" >/dev/null
  cp "build/final/$f.pdf" export/
  latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=build/brouillon \
    -usepretex='\def\cvdraftmode{}' "$f.tex" >/dev/null
  cp "build/brouillon/$f.pdf" "export/brouillon/${f}_BROUILLON.pdf"
  printf '%-40s %s page(s)\n' "$f.pdf" "$(pdfinfo "export/$f.pdf" | awk '/^Pages/{print $2}')"
done

# Le portfolio ne propose que les versions Full-Stack FR et EN
cp export/CV_Rachidi_IDONIYI_FullStack.pdf export/CV_Rachidi_IDONIYI_FullStack_EN.pdf ../public/assets/
echo "OK : PDF finaux dans cv/export/, brouillons dans cv/export/brouillon/, CV Full-Stack FR/EN copiés dans public/assets/"
