pot=$(find ./po -name "*.pot" | head -n 1)
domain=$(basename "$pot" .pot)

for po in ./po/*.po; do
    lang=$(basename "$po" .po)
    mkdir -p "./dist/locale/$lang/LC_MESSAGES"

    cp "./po/$lang.po" "./dist/locale/$lang/$domain.po"

    msgfmt "$po" -o "./dist/locale/$lang/LC_MESSAGES/$domain.mo"

done
