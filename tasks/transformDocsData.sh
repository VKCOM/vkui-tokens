#!/bin/sh

root_path=$(pwd);
themes_path="${root_path}/dist/themes";
result_docs_path="${root_path}/docs/public/static/data/docs.json";
result_themes=''

# Создаем пустой результирующий json
echo "{}" > $result_docs_path

# Создаем массив строк <themes> с именами директорий
shopt -s nullglob
cd $themes_path
themes=(*)
cd $root_path
shopt -u nullglob

# Заполняем результирующий json в виде <[key]: {}>, где key - имя директории
for i in "${!themes[@]}"
do
	dir=${themes[$i]}

	if [ $i != 0 ]; then
		result_themes+=", "
	fi

	result_themes+=''\"$dir\"': {}'
done
echo "{$result_themes}" | jq '.' > $result_docs_path

# Заполняем пустые объекты в результирующем json настоящими значениями
for i in "${!themes[@]}"
do
	dir=${themes[$i]}
	content=$(jq '.' -c ${themes_path}/${dir}/docs.json)

	condition=".$dir = $content"

	new_content=$(jq "$condition" $result_docs_path)
	echo "${new_content}" > $result_docs_path
done
