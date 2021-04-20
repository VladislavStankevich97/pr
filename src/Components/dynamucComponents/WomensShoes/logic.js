import {randomizeText} from '../../../helpers/text'
export const createData = (photoList, formValues) => () => {
  console.log('logik')
  const NameTableHeaders = {
    Title: "Заголовок",
    Description: "Описание",
    Size: "Размер",
    Condition: "Состояние",
    AdType: "Происхождение",
    Price: "Цена",
    AdStatus: "Продвижение",
    ListingFee: "Размещение",
    Address: "Адрес",
    ManagerName: "Менеджер",
    ContactPhone: "Телефон",
    AllowEmail: "Можно писать",
    photo: "Фотографии",
    VideoURL: "Видео",
  };
 if(!photoList || !photoList.length || !formValues) {
   return []
 }

  const maxCount = photoList.reduce((acc, item) => {
    if (item.length < acc) {
      acc = item.length;
    }
    return acc;
  }, photoList[0].length);

  const table = new Array(maxCount).fill(null).map((item, index) => {
    return {
      row: formValues
        ? Object.keys(formValues).reduce((acc, item) => {
            const form = formValues;
            switch (NameTableHeaders[item]) {
              // case NameTableHeaders.Title: {
              //     const titles = new Array(maxCount).fill(0).map(item=>{
              //       return randomizeText(item)
              //     })
              //     console.log()
              //   acc.push({
              //     value:titles + ' фото',
              //     name: NameTableHeaders[item],
              //     type: "text",
              //   });
              //   break;
              // }
              case "Размер": {
                const size = form[item] ?form[item].split("/"):[];
                acc.push({
                  value:
                    index > size.length - 1
                      ? size[index % size.length]
                      : size[index],
                  name: NameTableHeaders[item],
                  type: "text",
                });
                break;
              }
              case NameTableHeaders.photo: {
                const photos = photoList.reduce((acc, item)=>{
                  const count = item[index].file?1:0
                  acc={count:acc.count+count,
                    files:[...acc.files,item[index].file],
                    path:[...acc.path,item[index].path]
                  };
                  
                  return acc;
                },{count:0, files:[], path:[]})
                acc.push({
                  value:photos.count + ' фото',
                  name: NameTableHeaders[item],
                  type: "text",
                  files:photos,
                });
                break;
              }
              default: {
                acc.push({
                  value: form[item],
                  name: NameTableHeaders[item],
                  type: "text",
                });
              }
            }

            return acc;
          }, [])
        : [],
    };
  });

  return table;
};
