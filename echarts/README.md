# 文字换行
    formatter (params) {  
          return params.name.replace(/.{4}(?!$)/g, (a) => a + '\n')  
    }
