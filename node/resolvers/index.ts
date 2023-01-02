

export const getAllFortuneCookie = async (
    _: any,
    __: any,

    { clients: { masterdata } }: Context
) => {
    const response = await masterdata
        .searchDocuments({
            dataEntity: "FJ",
            fields: ["id", "text"],
            pagination: { page: 1, pageSize: 1000 }
        })
    return response
}

export const getRandomFortuneCookie = async (
    _: any,
    __: any,
    { clients: { masterdata } }: Context
) => {
    const response = await masterdata
        .searchDocuments({
            dataEntity: "FJ",
            fields: ["id", "text"],
            pagination: { page: 1, pageSize: 1000 }
        })
    const getRandomElement = response[Math.floor(Math.random() * response.length)];
    return getRandomElement;
}

export const getSearchFortuneCookie = async (
    _: any,
    { text }: { text: string },
    { clients: { masterdata } }: Context
) => {
    const response = await masterdata.searchDocuments({
        dataEntity: "FJ",
        fields: ["id", "text"],
        pagination: { page: 1, pageSize: 1000 },
        //  where: "text=*" + text + "*"
        where: `(text=*${text}*)`
    })
    return response
}
//  const result = data.filter((e:any) =>  e.text.toLowerCase().includes(text.toLowerCase())) 
//  return result})


export const createFortuneCookie = async (
    _: any,
    { text }: { text: string },

    { clients: { masterdata } }: Context
) => {
    const response = await masterdata
        .createDocument({
            dataEntity: "FJ",
            fields: { text }
        })
    return response
}

export const deleteFortuneCookie = async (
    _: any,
    { code }: { code: string },

    { clients: { masterdata } }: Context
) => {
    const response = await masterdata
        .deleteDocument({
            dataEntity: "FJ",
            id: code
        })
    return response
}

export const modifyFortuneCookie = async (
    _: any,
    { code, text }: { code: string, text: string },

    { clients: { masterdata } }: Context
) =>

    masterdata
        .updatePartialDocument({
            dataEntity: "FJ",
            id: code,
            fields: { text }
        })



