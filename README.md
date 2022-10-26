## Folder Structure

```
.src/
├── assets                              # Lưu ảnh, icon, ...                                        #Care
├── component                           # Chứa các component chung dùng mọi nơi                     #Care
  ├── form
    ├── Checkbox
    ├── FormInput
    └── ...
  ├── ui
      ├── Button
      ├── Breadcrumb
      └── ...
├── config                              # Lưu config của ứng dụng                                   #Care
├── data                                # Lưu dữ liệu không thay đổi                                #Care
├── features                            # Các features của ứng dụng                                 #Care
  ├── auth
      ├── components                    # Component chung chỉ dành cho feature Auth
          ├── SigninForm
          ├── SignupForm
          └── ForgetPasswordForm
      ├── hooks                         # Hook chỉ dành cho feature Auth
      ├── services                      # Service chỉ dành cho feature Auth
      └── index.js                      # Entry point, muốn export ra cái gì thì nằm ở đây
  ├── courses
  ├── exam
  ├── flashcard
  └── contest
├── hooks                               # Hook globals
├── layouts                             # Chứa các layout bố cục màn hình                           #Care
├── lib                                 # Thư viện bên thứ 3
├── pages                               # Chứa những page chỉ tồn tại duy nhất                      #Care
  ├── Home
  ├── Signin
  ├── Signup
  └── ...
├── routes                              # Chứa các routes điều hướng trang web                      #Care
├── services                            # Viết service gọi api ở đây
└── utils                               # Chứa những pure function để thực hiện tác vụ nào đó
```

## Naming convention

- camelCase: tên biến, thuộc tính của object,...
- PascalCase: tên file của Component

## File cấu hình:

|         File          |                        Ý nghĩa                        |
| :-------------------: | :---------------------------------------------------: |
|     `.gitignore`      |        Không theo dõi những file được liệt kê         |
|     `.prettierrc`     |             Chứa các quy tắc format code              |
|   `.prettierignore`   | Không áp dụng format code cho những file được liệt kê |
| `.tailwind.config.js` |   Ghi đè và bổ sung cấu hình mặc định của tailwind    |
|  `postcss.config.js`  |               Biên dịch pre-css -> css                |

## Extensions VSC

|            Name             |                   Ý nghĩa                    |
| :-------------------------: | :------------------------------------------: |
|      `Auto Rename Tag`      |       Auto rename paired HTML/XML tag        |
|      `Auto Close Tag`       |     Automatically add HTML/XML close tag     |
|  `Prettier Code formatter`  |                 Format code                  |
|   `Simple React Snippets`   |      Cú pháp để tạo ra 1 đoạn code nhỏ       |
| `Tailwind CSS IntelliSense` |           Biên dịch pre-css -> css           |
|    `Material Icon Theme`    |          Bộ icon cho file và folder          |
|          `Gitlens`          | Hiển thị thông tin Git (commit, author, ...) |

## Extensions for Dev (on Chrome)

|          Name           |         Ý nghĩa         |
| :---------------------: | :---------------------: |
| `React Developer Tools` |  React debugging tools  |
|    `Redux DevTools`     | Quản lí state trực quan |

## Members:

|         Name          |         Email          |
| :-------------------: | :--------------------: |
| `Hoàng Đình Anh Tuấn` | 20522110@gm.uit.edu.vn |
|   `Hoàng Văn Phúc`    | 20521760@gm.uit.edu.vn |
|    `Phan Thanh Tú`    | 20522101@gm.uit.edu.vn |
|  `Nguyễn Thái Tuấn`   | tuannt150102@gmail.com |
