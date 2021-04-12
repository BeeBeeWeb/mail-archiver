export const Emails = [
    {
        id: 1,
        from: 'aaa@example.com',
        to: ['zzz.zzz@example.com', 'zzz.abc@example.com'],
        subject: '[ HR-888 ] Notice of official announcement',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), 0).getTime(),
        attachments: [],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2,
        from: 'bbb@example.com',
        to: ['aaa.zzz@example.com'],
        subject: '[web:333] "Web Contact"',
        date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours() - 3, new Date().getMinutes() - 5, 0).getTime(),
        attachments: ['attachment_link.pdf'],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 3,
        from: 'ccc@example.com',
        to: ['eee.bbb@example.com', 'aaa.bbb@example.com', 'ggg.bbb@example.com'],
        subject: 'Happy New Year! Greetings for the New Year.',
        date: new Date('04/05/2021').getTime(),
        attachments: ['attachment_link.pdf', 'attachment_link.pdf'],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 4,
        from: 'ddd@example.com',
        to: ['hhh.bbb@example.com'],
        subject: '[HR-887(Revised: Office Expansion Project Team)] Notice of off galley of type and scrambled it to make a type specimen book',
        date: new Date('12/8/2020').getTime(),
        attachments: ['attachment_link.pdf', 'attachment_link.pdf'],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 5,
        from: 'ggg@example.com',
        to: ['lll.bbb@example.com'],
        subject: '[Github] Logout page',
        date: new Date('3/30/2021').getTime(),
        attachments: [],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 6,
        from: 'iii@example.com',
        to: ['bbb.bbb@example.com'],
        subject: '[dev］ Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5',
        date: new Date('3/16/2021').getTime(),
        attachments: ['attachment_link.pdf', 'attachment_link.pdf', 'attachment_link.pdf', 'attachment_link.pdf'],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 7,
        from: 'jjj@example.com',
        to: ['sss.bbb@example.com'],
        subject: 'Re: [Github] Brush-up on loading animation',
        date: new Date('3/24/2021').getTime(),
        attachments: [],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 8,
        from: 'mmm@example.com',
        to: ['qqq.bbb@example.com', 'zzz.bbb@example.com', 'vv.bbb@example.com', 'kk.bbb@example.com'],
        subject: 'Workplace Summary for sample, Inc.: Jun 2 - Jun 9',
        date: new Date('3/5/2021').getTime(),
        attachments: [],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 9,
        from: 'ppp@example.com',
        to: ['cce.bbb@example.com', 'sdss.bbb@example.com'],
        subject: 'I love you',
        date: new Date('2/17/2021').getTime(),
        attachments: [],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 10,
        from: 'qqq@example.com',
        to: ['Pablo-Diego.bbb@example.com'],
        subject: '[info:888] ABC EQUIPMENT COMPANY',
        date: new Date('1/13/2021').getTime(),
        attachments: [],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]