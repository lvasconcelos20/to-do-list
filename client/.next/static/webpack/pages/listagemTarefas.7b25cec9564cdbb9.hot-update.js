"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listagemTarefas",{

/***/ "./src/pages/listagemTarefas/index.jsx":
/*!*********************************************!*\
  !*** ./src/pages/listagemTarefas/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/pages/listagemTarefas/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListTarefas = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [noResults, setNoResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email) {\n            listarTarefas();\n        }\n    }, [\n        email\n    ]);\n    const listarTarefas = async ()=>{\n        setIsLoading(true);\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/tarefa/\".concat(email));\n            if (response.data.length === 0) {\n                setNoResults(true);\n            } else {\n                setTasks(response.data);\n                setNoResults(false);\n            }\n        } catch (error) {\n            console.error(\"Erro ao listar tarefas:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleTaskClick = (task)=>{\n        setSelectedTask(task);\n    };\n    const handleUpdateFinalizada = async (email, finalizada)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].patch(\"/tarefa/\".concat(email), {\n                finalizada\n            });\n            setTasks((prevTasks)=>prevTasks.map((task)=>task.email === email ? {\n                        ...task,\n                        finalizada\n                    } : task));\n        } catch (error) {\n            console.error(\"Erro ao atualizar tarefa:\", error);\n        }\n    };\n    const handleDelete = async (name, email)=>{\n        if (isDeleting) return;\n        setIsDeleting(true);\n        // Atualiza o estado localmente antes de enviar a solicitação de exclusão\n        const prevTasks = [\n            ...tasks\n        ];\n        setTasks((prevTasks)=>prevTasks.filter((task)=>task.name !== name || task.email !== email));\n        if ((selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.name) === name && (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.email) === email) {\n            setSelectedTask(null);\n        }\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"/tarefa/\".concat(name, \"/\").concat(email));\n        } catch (error) {\n            console.error(\"Erro ao excluir tarefa:\", error);\n            // Se a solicitação de exclusão falhar, restaura o estado local\n            setTasks(prevTasks);\n        } finally{\n            setIsDeleting(false);\n        }\n    };\n    const handleNextEdit = ()=>{\n        if (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.finalizada) return;\n        router.push(\"../editTarefa\");\n    };\n    const handleNextCadastro = ()=>{\n        router.push(\"../cadastroTarefas\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Page, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Lista de Tarefas\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"text\",\n                        placeholder: \"Digite o email do membro\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TaskList, {\n                            children: tasks.map((tarefa, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TaskItem, {\n                                    onClick: ()=>handleTaskClick(tarefa),\n                                    className: (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.email) === tarefa.email ? \"selected\" : \"\",\n                                    children: [\n                                        \"Nome: \",\n                                        tarefa.name,\n                                        \", Prioridade: \",\n                                        tarefa.prioridade,\n                                        \", Finalizada: \",\n                                        tarefa.finalizada ? \"Sim\" : \"N\\xe3o\",\n                                        (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.email) === tarefa.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TaskDetails, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Descri\\xe7\\xe3o:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: tarefa.descricao\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            children: [\n                                                                \"Finalizada:\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                    type: \"checkbox\",\n                                                                    checked: tarefa.finalizada,\n                                                                    onChange: (e)=>handleUpdateFinalizada(tarefa.email, e.target.checked),\n                                                                    disabled: tarefa.finalizada\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                                    lineNumber: 115,\n                                                                    columnNumber: 25\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 23\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.EditButton, {\n                                                            onClick: handleNextEdit,\n                                                            disabled: tarefa.finalizada,\n                                                            children: \"Editar Tarefa\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                            lineNumber: 122,\n                                                            columnNumber: 23\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.DeleteButton, {\n                                                            onClick: ()=>handleDelete(tarefa.name, tarefa.email),\n                                                            disabled: isDeleting,\n                                                            children: isDeleting ? \"Deletando...\" : \"Excluir Tarefa\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                            lineNumber: 128,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: handleNextCadastro,\n                            children: \"Criar Nova Tarefa\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListTarefas, \"bqxPlMrj+kdB3xZDeOusL3BHfIk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ListTarefas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTarefas);\nvar _c;\n$RefreshReg$(_c, \"ListTarefas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixJQUFJLEVBQUVhLE9BQU92QyxLQUFLOzREQUNyRG1ELFVBQVUzQztzRUFFVEEsYUFBYSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBN0JsQ2dDOzs7Ozs7Ozs7O3NDQXFDWCw4REFBQzdDLDBDQUFNQTs0QkFBQzhDLFNBQVNWO3NDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztHQTNJTWxDOztRQU9XRCxrREFBU0E7OztLQVBwQkM7QUE2SU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpc3RhZ2VtVGFyZWZhcy9pbmRleC5qc3g/YTJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZvcm0sIElucHV0LCBUYXNrTGlzdCwgVGFza0l0ZW0sIFBhZ2UsIExvYWRpbmcsIE5vUmVzdWx0cywgVGFza0RldGFpbHMsIEVkaXRCdXR0b24sIERlbGV0ZUJ1dHRvbiwgQnV0dG9uIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IExpc3RUYXJlZmFzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25vUmVzdWx0cywgc2V0Tm9SZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZFRhc2tdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGxpc3RhclRhcmVmYXMoKTtcclxuICAgIH1cclxuICB9LCBbZW1haWxdKTtcclxuXHJcbiAgY29uc3QgbGlzdGFyVGFyZWZhcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3RhcmVmYS8ke2VtYWlsfWApO1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzZXROb1Jlc3VsdHModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGFza3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0Tm9SZXN1bHRzKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBsaXN0YXIgdGFyZWZhczonLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhc2tDbGljayA9ICh0YXNrKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhc2sodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlRmluYWxpemFkYSA9IGFzeW5jIChlbWFpbCwgZmluYWxpemFkYSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpLnBhdGNoKGAvdGFyZWZhLyR7ZW1haWx9YCwgeyBmaW5hbGl6YWRhIH0pO1xyXG4gICAgICBzZXRUYXNrcygocHJldlRhc2tzKSA9PlxyXG4gICAgICAgIHByZXZUYXNrcy5tYXAoKHRhc2spID0+XHJcbiAgICAgICAgICB0YXNrLmVtYWlsID09PSBlbWFpbCA/IHsgLi4udGFzaywgZmluYWxpemFkYSB9IDogdGFza1xyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYXR1YWxpemFyIHRhcmVmYTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKG5hbWUsIGVtYWlsKSA9PiB7XHJcbiAgICBpZiAoaXNEZWxldGluZykgcmV0dXJuO1xyXG4gICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuXHJcbiAgICAvLyBBdHVhbGl6YSBvIGVzdGFkbyBsb2NhbG1lbnRlIGFudGVzIGRlIGVudmlhciBhIHNvbGljaXRhw6fDo28gZGUgZXhjbHVzw6NvXHJcbiAgICBjb25zdCBwcmV2VGFza3MgPSBbLi4udGFza3NdO1xyXG4gICAgc2V0VGFza3MoKHByZXZUYXNrcykgPT4gcHJldlRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5uYW1lICE9PSBuYW1lIHx8IHRhc2suZW1haWwgIT09IGVtYWlsKSk7XHJcbiAgICBpZiAoc2VsZWN0ZWRUYXNrPy5uYW1lID09PSBuYW1lICYmIHNlbGVjdGVkVGFzaz8uZW1haWwgPT09IGVtYWlsKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFzayhudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkuZGVsZXRlKGAvdGFyZWZhLyR7bmFtZX0vJHtlbWFpbH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZXhjbHVpciB0YXJlZmE6JywgZXJyb3IpO1xyXG5cclxuICAgICAgLy8gU2UgYSBzb2xpY2l0YcOnw6NvIGRlIGV4Y2x1c8OjbyBmYWxoYXIsIHJlc3RhdXJhIG8gZXN0YWRvIGxvY2FsXHJcbiAgICAgIHNldFRhc2tzKHByZXZUYXNrcyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0RWRpdCA9ICgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZFRhc2s/LmZpbmFsaXphZGEpIHJldHVybjtcclxuICAgIHJvdXRlci5wdXNoKCcuLi9lZGl0VGFyZWZhJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dENhZGFzdHJvID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy4uL2NhZGFzdHJvVGFyZWZhcycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8aDE+TGlzdGEgZGUgVGFyZWZhczwvaDE+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIGVtYWlsIGRvIG1lbWJyb1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFRhc2tMaXN0PlxyXG4gICAgICAgICAgICB7dGFza3MubWFwKCh0YXJlZmEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhc2tJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFza0NsaWNrKHRhcmVmYSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkVGFzaz8uZW1haWwgPT09IHRhcmVmYS5lbWFpbCA/ICdzZWxlY3RlZCcgOiAnJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBOb21lOiB7dGFyZWZhLm5hbWV9LCBQcmlvcmlkYWRlOiB7dGFyZWZhLnByaW9yaWRhZGV9LCBGaW5hbGl6YWRhOiB7dGFyZWZhLmZpbmFsaXphZGEgPyAnU2ltJyA6ICdOw6NvJ31cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhc2s/LmVtYWlsID09PSB0YXJlZmEuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VGFza0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlc2NyacOnw6NvOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3RhcmVmYS5kZXNjcmljYW99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmFsaXphZGE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGFyZWZhLmZpbmFsaXphZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVVcGRhdGVGaW5hbGl6YWRhKHRhcmVmYS5lbWFpbCwgZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RhcmVmYS5maW5hbGl6YWRhfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0RWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RhcmVmYS5maW5hbGl6YWRhfSBcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdGFyIFRhcmVmYVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9FZGl0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUodGFyZWZhLm5hbWUsIHRhcmVmYS5lbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0RlbGV0aW5nfSAvLyBBZGljaW9uYSB1bSBlc3RhZG8gZGUgYmxvcXVlaW8gcGFyYSBldml0YXIgbcO6bHRpcGxvcyBjbGlxdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0RlbGV0aW5nID8gJ0RlbGV0YW5kby4uLicgOiAnRXhjbHVpciBUYXJlZmEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFza0RldGFpbHM+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvVGFza0l0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYXNrTGlzdD5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dENhZGFzdHJvfT5DcmlhciBOb3ZhIFRhcmVmYTwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUGFnZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFRhcmVmYXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiQ29udGFpbmVyIiwiRm9ybSIsIklucHV0IiwiVGFza0xpc3QiLCJUYXNrSXRlbSIsIlBhZ2UiLCJMb2FkaW5nIiwiTm9SZXN1bHRzIiwiVGFza0RldGFpbHMiLCJFZGl0QnV0dG9uIiwiRGVsZXRlQnV0dG9uIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiTGlzdFRhcmVmYXMiLCJ0YXNrcyIsInNldFRhc2tzIiwiZW1haWwiLCJzZXRFbWFpbCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm5vUmVzdWx0cyIsInNldE5vUmVzdWx0cyIsInNlbGVjdGVkVGFzayIsInNldFNlbGVjdGVkVGFzayIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwicm91dGVyIiwibGlzdGFyVGFyZWZhcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImxlbmd0aCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRhc2tDbGljayIsInRhc2siLCJoYW5kbGVVcGRhdGVGaW5hbGl6YWRhIiwiZmluYWxpemFkYSIsInBhdGNoIiwicHJldlRhc2tzIiwibWFwIiwiaGFuZGxlRGVsZXRlIiwibmFtZSIsImZpbHRlciIsImRlbGV0ZSIsImhhbmRsZU5leHRFZGl0IiwicHVzaCIsImhhbmRsZU5leHRDYWRhc3RybyIsImgxIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0YXJlZmEiLCJpbmRleCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJwcmlvcmlkYWRlIiwiaDMiLCJwIiwiZGVzY3JpY2FvIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsImNoZWNrZWQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/listagemTarefas/index.jsx\n"));

/***/ })

});