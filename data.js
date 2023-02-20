const dataDZ = `[
    { "picture":"https://s3-alpha-sig.figma.com/img/110a/66b6/df6c93d331faf25721032a461f13ca6f?Expires=1677456000&Signature=P4LswJABN5TYvhb58B7whZaaYl-sCE-TDUJK76DGzDEj49z4umdk7AEkPZYACGRSCN~bAoiRku4PnuzkrZgUvTOw1DkCQas4HQdu8UzlfsbGqk0cva7vB9Oog9l2LGk7QhfzLZeyH4clsZMRQLYSzf0YKOxB9CJUyMFls4XWV96uz6T-5NJX8gT6Q7yDTQX-zU80Ne0Rx1S~SF~PFqnzI4-5vJaH4QkUa~RhUVkdHYLV5YH3r5RJHo-Aij2fKa~Bw-DpLMGx1bV1cRbwB2t2M2xiXHYKIHih37n7JL-Wxh0BKxtQlVTAP1kJd4B3yTVNxvGGnniVYR0~OJKNJCZx6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "title":"ELLERY X MO CAPSULE",
    "price":"52",
    "text":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."   
    },
    { "picture":"https://s3-alpha-sig.figma.com/img/afab/24c8/989b81b8e6e6b0ea0fbba12039c5649f?Expires=1677456000&Signature=dlvNB0FqnqP0EdUzp6D43XTCrVvzoaHHndrPhILl5ROuGvwqjJ8DvIYaa5KNB8GehjpExbCmh5QhRYxp0sX3y3BieD8-Oh3JC6gREUSJoG9HO1xsTM2mYq2qLiYBdZHsygIvp03rglMhvsg3JrC-xOOEmDfH9SVV3kuRamxQtUG-Tc0kaNXECCOVhUoI4CV1O4FFwCiPfowWHbf9eGqLia6c814gYo82uBi4pcsa7UBWZanYiN1YHjv0~ISOQLQNKWV3XES6UwTBKUvC3Pa3HmYMl8Npvs4OiDXZ3M19NXJLU98SJNHT98ZP~kGtcxGM1TQidvbyH7G7aIHY2Bl8jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "title":"ELLERY X M'O CAPSULE Lor",
    "price":"152",
    "text":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi_1111." 
    },
    { "picture":"https://s3-alpha-sig.figma.com/img/40a9/b199/917d45f162c819492be1376fa26273a1?Expires=1677456000&Signature=qxic5oSvONNG7y5x0KSdpdOAjk2l2C62yG8y4aUAVlkVNV7xo6Tld4AhylhKYwmNRLU54QMU2ed-5DEFwTBEGBuGpFSZP9t3fSND3pk8cYDwAf1qD7iHimb2xKbHH0N6h2H~SvoOHqsIrpsqgTn9vSaxha1tfLYgxdS9NC35LioQLl9FkHKCqTU8tFrr3AI~4bmzxs8zp1E86pHlzqgVL7WWt7LiRvm1F1oQwJVBrVq6SG0DdMHsjVu~j~HGN7w3lXylDRui9F5Pp5j8s3EJmZyUmyGLGYCJU3-yXlovs9j~Wv9GungkSuUnHJ2WQNW6BUG3~ZORs69RdxnSDltsnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "title":"ELLERY X M'O CAPSULE22222",
    "price":"522",
    "text":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi22222."  
    },
    { "picture":"https://s3-alpha-sig.figma.com/img/69d0/fa53/e0e583f696015f0aa8898db2425dccfd?Expires=1677456000&Signature=ZnJjghDOOXQUr-YOgbMUbyNgcjweLNxQb5vaL73u8VQuAXQBMO4f5cGBBKKtvx54QNcVgDT8-ohNrQfyRFUo~JxjLOPl8A~qUMKUIH8yVEv77TChxcaA-N8PBRU0AmY1~MAear2JW9d5oaw7b9ifwCApeb5T5lvu~-UtjTs3Q4HRc4cU2q03B-jI1VdbZ8N2aXrNzfz7NmfuuSdYfVxFu8QorSN9oD33tQC4zIXlxG4arB3UjjwnObSZWj-tERJvdRujgG5PN2BpxCtBS2ZAi3JmCaKNegNIRQyZa-FP6NpX5l7kbGf4JEw4tpFm-IELj4w5szK2bNte2rNi60vnkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "title":"ELLERY X M'O CAPSULE Lor33333",
    "price":"1352",
    "text":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi_333333."    
    },
    { "picture":"https://s3-alpha-sig.figma.com/img/fa85/e077/552da96bc018da72c71696e34775321c?Expires=1677456000&Signature=VsYii5ioneyHf8SQ6LmLgbMG3sri~weUR9KPfZTdKbwhW1ghMQ8PXb4ELFLrzv0CYk09Q12sngfT9Nt~9-pnBkA-pM0d4fg4pOLnBrXmszJa~8wdAKoI~IRMR6hdJTGSXKZ8symEVFodAEpyr3wEqThWkr4iR7VF1lpZ2g0CS-N2mx4VHaLExA4cigl9NYAgbFqejrwWjfFRHTKjxefQirAFEdYz7mivsXOFbNSevoYOgb-datCzYht9RKg8-IAG7xKeNAhOJ-5gQVpl3Br9Y1CWgCNBeg7afOTcJ6QD6KW9SpzV3n-96zIgAVmauh7BjQiwkH8zJ0MAc1dZ46te2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "title":"ELLERY X M'O CAPSULE Lor4444",
    "price":"12",
    "text":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi_4." 
    }
    ]`