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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./src/pages/listagemTarefas/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// src/pages/ListTarefas.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ListTarefas = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [noResults, setNoResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedTask, setSelectedTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (email) {\n            listarTarefas();\n        }\n    }, [\n        email\n    ]);\n    const listarTarefas = async ()=>{\n        setIsLoading(true);\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/tarefa/\".concat(email));\n            if (response.data.length === 0) {\n                setNoResults(true);\n            } else {\n                setTasks(response.data);\n                setNoResults(false);\n            }\n        } catch (error) {\n            console.error(\"Erro ao listar tarefas:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleTaskClick = (task)=>{\n        setSelectedTask(task);\n    };\n    const handleUpdateFinalizada = async (email, finalizada)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].patch(\"/tarefa/\".concat(email), {\n                finalizada\n            });\n            setTasks((prevTasks)=>prevTasks.map((task)=>task.email === email ? {\n                        ...task,\n                        finalizada\n                    } : task));\n        } catch (error) {\n            console.error(\"Erro ao atualizar tarefa:\", error);\n        }\n    };\n    const handleDelete = async (name, email)=>{\n        if (isDeleting) return; // Prevenir múltiplos cliques\n        setIsDeleting(true);\n        const prevTasks = [\n            ...tasks\n        ];\n        setTasks((prevTasks)=>prevTasks.filter((task)=>task.name !== name || task.email !== email));\n        if ((selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.name) === name && (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.email) === email) {\n            setSelectedTask(null);\n        }\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"/tarefa/\".concat(name, \"/\").concat(email));\n        } catch (error) {\n            console.error(\"Erro ao excluir tarefa:\", error);\n            let errorMessage = \"Erro ao excluir a tarefa. Por favor, tente novamente.\";\n            if (error.response && error.response.status === 404) {\n                errorMessage = \"Tarefa n\\xe3o encontrada. Tente novamente.\";\n            } else if (!error.response) {\n                errorMessage = \"Problema de conex\\xe3o com o servidor. Verifique sua internet e tente novamente.\";\n            }\n            console.error(errorMessage);\n            setTasks(prevTasks); // Restaurar tarefas anteriores\n        } finally{\n            setIsDeleting(false);\n        }\n    };\n    const handleNextEdit = ()=>{\n        if (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.finalizada) return;\n        router.push(\"../editTarefa\");\n    };\n    const handleNextCadastro = ()=>{\n        router.push(\"../cadastroTarefas\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Page, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Lista de Tarefas\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"text\",\n                        placeholder: \"Digite o email do membro\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TaskList, {\n                            children: tasks.map((tarefa, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TaskItem, {\n                                    onClick: ()=>handleTaskClick(tarefa),\n                                    className: (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.email) === tarefa.email ? \"selected\" : \"\",\n                                    children: [\n                                        \"Nome: \",\n                                        tarefa.name,\n                                        \", Prioridade: \",\n                                        tarefa.prioridade,\n                                        \", Finalizada: \",\n                                        tarefa.finalizada ? \"Sim\" : \"N\\xe3o\",\n                                        (selectedTask === null || selectedTask === void 0 ? void 0 : selectedTask.email) === tarefa.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.TaskDetails, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Descri\\xe7\\xe3o:\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: tarefa.descricao\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            children: [\n                                                                \"Finalizada:\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                    type: \"checkbox\",\n                                                                    checked: tarefa.finalizada,\n                                                                    onChange: (e)=>handleUpdateFinalizada(tarefa.email, e.target.checked),\n                                                                    disabled: tarefa.finalizada\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                                    lineNumber: 122,\n                                                                    columnNumber: 27\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                            lineNumber: 120,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.EditButton, {\n                                                            onClick: handleNextEdit,\n                                                            disabled: tarefa.finalizada,\n                                                            children: \"Editar Tarefa\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                            lineNumber: 129,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.DeleteButton, {\n                                                            onClick: ()=>handleDelete(tarefa.name, tarefa.email),\n                                                            disabled: isDeleting,\n                                                            children: isDeleting ? \"Excluindo...\" : \"Excluir Tarefa\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                            lineNumber: 135,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: handleNextCadastro,\n                            children: \"Criar Nova Tarefa\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\felipe\\\\projeto\\\\ultimo\\\\testt\\\\client\\\\src\\\\pages\\\\listagemTarefas\\\\index.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListTarefas, \"bqxPlMrj+kdB3xZDeOusL3BHfIk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ListTarefas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListTarefas);\nvar _c;\n$RefreshReg$(_c, \"ListTarefas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVDLE1BQU0sQ0FBQ1ksT0FBTztvRUFDdEVDLFVBQVVaLE9BQU9wQixVQUFVOzs7Ozs7Ozs7Ozs7c0VBRy9CLDhEQUFDNUIsOENBQVVBOzREQUNUa0QsU0FBU1o7NERBQ1RzQixVQUFVWixPQUFPcEIsVUFBVTtzRUFDNUI7Ozs7OztzRUFHRCw4REFBQzNCLGdEQUFZQTs0REFDYmlELFNBQVMsSUFBTWxCLGFBQWFnQixPQUFPZixJQUFJLEVBQUVlLE9BQU96QyxLQUFLOzREQUNyRHFELFVBQVU3QztzRUFFVEEsYUFBYSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBN0JoQ2tDOzs7Ozs7Ozs7O3NDQXFDWCw4REFBQy9DLDBDQUFNQTs0QkFBQ2dELFNBQVNWO3NDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQWxKTXBDOztRQU9XRCxrREFBU0E7OztLQVBwQkM7QUFvSk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpc3RhZ2VtVGFyZWZhcy9pbmRleC5qc3g/YTJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvTGlzdFRhcmVmYXMudHN4XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRm9ybSwgSW5wdXQsIFRhc2tMaXN0LCBUYXNrSXRlbSwgUGFnZSwgTG9hZGluZywgTm9SZXN1bHRzLCBUYXNrRGV0YWlscywgRWRpdEJ1dHRvbiwgRGVsZXRlQnV0dG9uLCBCdXR0b24gfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTGlzdFRhcmVmYXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbm9SZXN1bHRzLCBzZXROb1Jlc3VsdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhc2ssIHNldFNlbGVjdGVkVGFza10gPSB1c2VTdGF0ZShudWxsKTsgXHJcbiAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGxpc3RhclRhcmVmYXMoKTtcclxuICAgIH1cclxuICB9LCBbZW1haWxdKTtcclxuXHJcbiAgY29uc3QgbGlzdGFyVGFyZWZhcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3RhcmVmYS8ke2VtYWlsfWApO1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzZXROb1Jlc3VsdHModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VGFza3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0Tm9SZXN1bHRzKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBsaXN0YXIgdGFyZWZhczonLCBlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhc2tDbGljayA9ICh0YXNrKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhc2sodGFzayk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlRmluYWxpemFkYSA9IGFzeW5jIChlbWFpbCwgZmluYWxpemFkYSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpLnBhdGNoKGAvdGFyZWZhLyR7ZW1haWx9YCwgeyBmaW5hbGl6YWRhIH0pO1xyXG4gICAgICBzZXRUYXNrcygocHJldlRhc2tzKSA9PlxyXG4gICAgICAgIHByZXZUYXNrcy5tYXAoKHRhc2spID0+XHJcbiAgICAgICAgICB0YXNrLmVtYWlsID09PSBlbWFpbCA/IHsgLi4udGFzaywgZmluYWxpemFkYSB9IDogdGFza1xyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYXR1YWxpemFyIHRhcmVmYTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKG5hbWUsIGVtYWlsKSA9PiB7XHJcbiAgICBpZiAoaXNEZWxldGluZykgcmV0dXJuOyAvLyBQcmV2ZW5pciBtw7psdGlwbG9zIGNsaXF1ZXNcclxuICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcHJldlRhc2tzID0gWy4uLnRhc2tzXTtcclxuICAgIHNldFRhc2tzKChwcmV2VGFza3MpID0+IHByZXZUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2submFtZSAhPT0gbmFtZSB8fCB0YXNrLmVtYWlsICE9PSBlbWFpbCkpO1xyXG4gICAgaWYgKHNlbGVjdGVkVGFzaz8ubmFtZSA9PT0gbmFtZSAmJiBzZWxlY3RlZFRhc2s/LmVtYWlsID09PSBlbWFpbCkge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhc2sobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpLmRlbGV0ZShgL3RhcmVmYS8ke25hbWV9LyR7ZW1haWx9YCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGV4Y2x1aXIgdGFyZWZhOicsIGVycm9yKTtcclxuXHJcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBleGNsdWlyIGEgdGFyZWZhLiBQb3IgZmF2b3IsIHRlbnRlIG5vdmFtZW50ZS4nO1xyXG5cclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gJ1RhcmVmYSBuw6NvIGVuY29udHJhZGEuIFRlbnRlIG5vdmFtZW50ZS4nO1xyXG4gICAgICB9IGVsc2UgaWYgKCFlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9ICdQcm9ibGVtYSBkZSBjb25leMOjbyBjb20gbyBzZXJ2aWRvci4gVmVyaWZpcXVlIHN1YSBpbnRlcm5ldCBlIHRlbnRlIG5vdmFtZW50ZS4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIHNldFRhc2tzKHByZXZUYXNrcyk7IC8vIFJlc3RhdXJhciB0YXJlZmFzIGFudGVyaW9yZXNcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTmV4dEVkaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRUYXNrPy5maW5hbGl6YWRhKSByZXR1cm47XHJcbiAgICByb3V0ZXIucHVzaCgnLi4vZWRpdFRhcmVmYScpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRDYWRhc3RybyA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcuLi9jYWRhc3Ryb1RhcmVmYXMnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2U+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGgxPkxpc3RhIGRlIFRhcmVmYXM8L2gxPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBlbWFpbCBkbyBtZW1icm9cIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFza0xpc3Q+XHJcbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFyZWZhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhc2tJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhc2tDbGljayh0YXJlZmEpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkVGFzaz8uZW1haWwgPT09IHRhcmVmYS5lbWFpbCA/ICdzZWxlY3RlZCcgOiAnJ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTm9tZToge3RhcmVmYS5uYW1lfSwgUHJpb3JpZGFkZToge3RhcmVmYS5wcmlvcmlkYWRlfSwgRmluYWxpemFkYToge3RhcmVmYS5maW5hbGl6YWRhID8gJ1NpbScgOiAnTsOjbyd9XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhc2s/LmVtYWlsID09PSB0YXJlZmEuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYXNrRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXNjcmnDp8Ojbzo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3RhcmVmYS5kZXNjcmljYW99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmFsaXphZGE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGFyZWZhLmZpbmFsaXphZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVVwZGF0ZUZpbmFsaXphZGEodGFyZWZhLmVtYWlsLCBlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0YXJlZmEuZmluYWxpemFkYX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0RWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGFyZWZhLmZpbmFsaXphZGF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdGFyIFRhcmVmYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0VkaXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHRhcmVmYS5uYW1lLCB0YXJlZmEuZW1haWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEZWxldGluZ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0RlbGV0aW5nID8gJ0V4Y2x1aW5kby4uLicgOiAnRXhjbHVpciBUYXJlZmEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rhc2tEZXRhaWxzPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9UYXNrSXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9UYXNrTGlzdD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0Q2FkYXN0cm99PkNyaWFyIE5vdmEgVGFyZWZhPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1BhZ2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RUYXJlZmFzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFwaSIsIkNvbnRhaW5lciIsIkZvcm0iLCJJbnB1dCIsIlRhc2tMaXN0IiwiVGFza0l0ZW0iLCJQYWdlIiwiTG9hZGluZyIsIk5vUmVzdWx0cyIsIlRhc2tEZXRhaWxzIiwiRWRpdEJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkJ1dHRvbiIsInVzZVJvdXRlciIsIkxpc3RUYXJlZmFzIiwidGFza3MiLCJzZXRUYXNrcyIsImVtYWlsIiwic2V0RW1haWwiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJub1Jlc3VsdHMiLCJzZXROb1Jlc3VsdHMiLCJzZWxlY3RlZFRhc2siLCJzZXRTZWxlY3RlZFRhc2siLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsInJvdXRlciIsImxpc3RhclRhcmVmYXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVUYXNrQ2xpY2siLCJ0YXNrIiwiaGFuZGxlVXBkYXRlRmluYWxpemFkYSIsImZpbmFsaXphZGEiLCJwYXRjaCIsInByZXZUYXNrcyIsIm1hcCIsImhhbmRsZURlbGV0ZSIsIm5hbWUiLCJmaWx0ZXIiLCJkZWxldGUiLCJlcnJvck1lc3NhZ2UiLCJzdGF0dXMiLCJoYW5kbGVOZXh0RWRpdCIsInB1c2giLCJoYW5kbGVOZXh0Q2FkYXN0cm8iLCJoMSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGFyZWZhIiwiaW5kZXgiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwicHJpb3JpZGFkZSIsImgzIiwicCIsImRlc2NyaWNhbyIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJjaGVja2VkIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/listagemTarefas/index.jsx\n"));

/***/ })

});