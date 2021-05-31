// У message есть THIS!

let old_wx0183 = null;
const hahc_xauto_scrollx42ex = {}
const widgetListx42ex = {}
const lh__8ijmd21nn23 = {}

function widget(element, params = false){
    if (!(element instanceof HTMLElement)){
        switch (element.substr(0,1)) {
            case '#': return widgetListx42ex[element.substr(1)].element
            case '$': return widgetListx42ex[element.substr(1)].params
            case '@':
                element = widgetListx42ex[element.substr(1)].element
            break;
            default:
                element = document.createElement(element)
            break;
        }
    }

    // addEventListener("click", displayDate)
        
    
    
    if (params) 
    for (let i of Object.keys(params)) { 


        switch (i) {
            case 'style':
                for (let j of Object.keys(params[i])) element.style[j] = params[i][j]
            break;
            case 'hover':
                let hoverstyle = '';
                for (let j of Object.keys(params[i])) {
                    hoverstyle += `${j}: ${params[i][j]};`
                }
                const xid = 'id' in params?params['id']:`d${Math.random()}`.replace('.','f__')
                element.id = xid

                hoverstyle = `#${xid}:hover {${hoverstyle}}`

                const styleElement = document.createElement('style')
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = hoverstyle;
                } else {
                    styleElement.appendChild(document.createTextNode(hoverstyle));
                }
                document.getElementsByTagName('head')[0].appendChild(styleElement)
            break;
            case 'child':
                params[i].map(child => {
                    element.appendChild(child)
                })
            break;
            case 'name':
                _params = params!=false ? params :{}

                _params['on'] = function(event, func){
                    // if (!(params[i] in lh__8ijmd21nn23)) 
                    // if (params[i] in lh__8ijmd21nn23 && lh__8ijmd21nn23[params[i]].indexOf('event') == -1){
                        const func2 = func.bind(element)
                        element.addEventListener(event, func2);
                        
                        if (!(params[i] in  lh__8ijmd21nn23)) lh__8ijmd21nn23[params[i]] = []
                            lh__8ijmd21nn23[params[i]].push(event) 

                        return {
                            object: element,
                            listener: params[i],
                            on: event,
                            result: func
                        }
                    // } else {
                    //     console.error('Не могу добавить прослушку', event);
                    // }
                }

                widgetListx42ex[params[i]] = {element, params:_params}
            default:
                if (typeof params[i] == 'object' && 'listener' in params[i]){
                    const listener = params[i]
                    const func2 = listener.result.bind(listener.object)
                    const func3 = () => {
                        element[i] = func2()
                    }
                    listener.object.addEventListener(listener.on, func3);
                    func3()
                } else {
                    element[i] = params[i];
                }
            break;
        }



        // console.log(params[i])
        // if (i=='style') {
        //     for (let j of Object.keys(params[i])) element.style[j] = params[i][j]
        // } else if (i=='hover') {
        //     let hoverstyle = '';
        //     for (let j of Object.keys(params[i])) {
        //         hoverstyle += `${j}: ${params[i][j]};`
        //     }
        //     const xid = 'id' in params?params['id']:`d${Math.random()}`.replace('.','f__')
        //     element.id = xid

        //     hoverstyle = `#${xid}:hover {${hoverstyle}}`

        //     const styleElement = document.createElement('style')
        //     if (styleElement.styleSheet) {
        //         styleElement.styleSheet.cssText = hoverstyle;
        //     } else {
        //         styleElement.appendChild(document.createTextNode(hoverstyle));
        //     }
        //     document.getElementsByTagName('head')[0].appendChild(styleElement)
        // } else if (i=='child') {
        //     params[i].map(child => {
        //         element.appendChild(child)
        //     })
        // } else if (i=='name') {
        //     params[i].map(child => {
        //         element.appendChild(child)
        //     })
        // } else element[i] = params[i];
    } 
    return element;
}

function showDialog({ title, message, buttons, data, style, methods, form_request, nav}) {
    function createElement(tag, params = false){
		const element = document.createElement(tag)
		if (params) 
        for (let i of Object.keys(params)) { 
            if (i=='style') for (let j of Object.keys(params[i])) element.style[j] = params[i][j]
            else if (i=='hover') {
                console.log('hover');
                let hoverstyle = '';
                for (let j of Object.keys(params[i])) {
                    hoverstyle += `${j}: ${params[i][j]};`
                }
                const xid = 'id' in params?params['id']:`d${Math.random()}`.replace('.','f__')
                element.id = xid

                hoverstyle = `#${xid}:hover {${hoverstyle}}`
                // console.log('hh>>', hoverstyle);

                const styleElement = document.createElement('style')
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = hoverstyle;
                } else {
                    styleElement.appendChild(document.createTextNode(hoverstyle));
                }
                document.getElementsByTagName('head')[0].appendChild(styleElement)
            } else if (i=='child') {
                params[i].map(child => {
                    element.appendChild(child)
                })
            } else element[i] = params[i];
        } 
		return element;
	}



    let navPath = ''
    let navigator = null
    if (nav) {
        navigator = createElement('div', {
            style: {
                borderRight: '1px solid #ccc',
                minWidth: '150px'
            }
        })


        function renderMenu(elements){
            const ul = createElement('ul', {
                style: {
                    margin: 0,
                    padding: 0
                }
            })


            let keys = []
            if (Array.isArray(elements)){
                keys = elements.map(x => x['title'])
            } else {
                
            }


            for(const i of Object.keys(elements)){
                console.log('>>>', i);
                const li = createElement('ul', {
                    innerHTML: i,
                    style: {
                        margin: 0,
                        padding: '2px 5px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all .3s'
                    }, 
                    hover: {
                        background: '#ccc',
                        color: '#fff'
                    }
                })
                ul.appendChild(li)
            }
            return ul
        }
        navigator.appendChild(renderMenu(nav))
    }

    console.log(navigator)


    const main_buttons = buttons;
    const main_message = message;
    const main_data = data;
    function serializator(_frm) {
        let array = Array.from(new FormData(_frm));
        console.log('array', array);
        let result = {};
        for (let i in array) {


            let name = array[i][0];
            let value = array[i][1];

            if (name.indexOf('[') != -1) {
                let exp = name.split('[');
                let new_name = exp[0];
                let id = exp[1].replace(']', '');

                if (new_name in result) {
                    result[new_name] = Object.assign(result[new_name], { [id]: value });
                } else {
                    result = Object.assign(result, { [new_name]: { [id]: value } });
                }
            } else {
                result = Object.assign(result, { [name]: value });
            }
        }
        return result;
    }



    const _modelDi = document.createElement("div")
    let mouseOnCloseWrapper = false
    const remove_black = () => {
        if (old_wx0183) {
            try {
                old_wx0183.parentNode.removeChild(old_wx0183);
            } catch (err) { console.log('showDialog', err) }
            old_wx0183 = null
            document.body.style.overflow = 'auto'
            if (methods && 'onclose' in methods && typeof methods['onclose'] == 'function')
                methods['onclose']();
        }
    }
    remove_black()
    document.body.style.overflow = 'hidden'
    old_wx0183 = _modelDi
    const on_mousedown = function (e) {
        if (e.target == this && window.outerWidth - e.clientX > 50)
            mouseOnCloseWrapper = true
    }
    const on_mouseup = function () {
        if (mouseOnCloseWrapper) {
            document.body.style.overflow = 'auto'
            remove_black()
        }
    }

    _modelDi.classList.add('black_h12nbsx9dk23m32ui4948382')
    _modelDi.onmousedown = on_mousedown
    _modelDi.onmouseup = on_mouseup


    const _form = document.createElement("form")
    _form.classList = ['_form_h12nbsx9dk23m32ui4948382']
    if (style) {
        if (style.padding)
            _form.style.padding = style.padding

        if (style.width)
            // _form.style.width = style.width + 'px !important'
            _form.setAttribute('style', `width: ${style.width}px !important`);
    }


    const fieldset = document.createElement("fieldset")


   
    _form.appendChild(fieldset)


    if (form_request) {
        if ('method' in form_request)
            _form.method = form_request['method'];

        if ('action' in form_request)
            _form.action = form_request['action'];

        if ('target' in form_request)
            _form.target = form_request['target'];
    }



    const _formRight = document.createElement("form")
    _formRight.onsubmit = (e) => e.preventDefault()
    _formRight.style.display = 'none'
    _formRight.classList = ['_formRight_h12nbsx9dk23m32ui4948382']


    const close_panel = getButtons({ '✖': (e) => { mouseOnCloseWrapper = true; on_mouseup() } }, title, false)
    close_panel.classList = ['close_panel_h12nbsx9dk23m32ui4948382']


    function xright({ message, buttons, width, data }) {
        width = parseInt(width)
        const htmldata = document.createElement("div")
        if (width) {
            window.style.maxWidth = (650 + width) + 'px'
            _formRight.style.width = width + 'px'
            htmldata.style.width = width - 30 + 'px'
        } else
            window.style.maxWidth = '850px'

        _formRight.style.height = _form.offsetHeight + 'px'
        _formRight.innerHTML = '';
        _formRight.appendChild(htmldata)
        messageToFieldset(htmldata, message, data)

        _formRight.style.display = 'block'
        // _formRight.innerHTML = mess
        fieldset.disabled = true;

        const closeRight = () => {
            window.style.maxWidth = '650px'
            _formRight.style.display = 'none'
            bottomButtons.innerHTML = '';
            bottomButtons.appendChild(getButtons(main_buttons))
            fieldset.disabled = false;
        }
        bottomButtons.innerHTML = '';

        const apply = () => {
            const data2 = serializator(_formRight)

            data = Object.assign(serializator(_form), data2)
            messageToFieldset(fieldset, main_message, data)
            return data2
        }

        if (buttons) {
            const btns2 = {}
            for (let i of Object.keys(buttons)) {
                btns2[i] = () => {
                    if (!_formRight.reportValidity()) return false;

                    // console.log('_formRight>>', _bind);

                    let right_bind = _bind;
                    right_bind.close = closeRight

                    let __f = buttons[i]
                    __f = __f.bind(right_bind)// (apply())
                    closeRight()
                    __f(apply())
                }
            }
            bottomButtons.appendChild(getButtons(btns2))
        } else
            bottomButtons.appendChild(getButtons({
                'Сохранить': () => {
                    if (!_formRight.reportValidity()) return false;
                    closeRight()
                    apply()
                }
            })
            )
    }

    var _bind = {
        createElement,
        widget,
        button: {

        },
        data: main_data,
        close: () => {
            remove_black()
        },
        reopen: () => {
            remove_black()
            showDialog({ title, message, buttons, main_data, style, methods, form_request });
        },
        form: () => {
            const formData = Object.assign(data, serializator(_form));
            const descript = {}

            for (const i of Object.keys(formData)) {
                Object.defineProperty(descript, i, {
                    get: () => Object.assign(data, serializator(_form))[i],
                    set: (x) => {
                        console.log(main_data)

                        messageToFieldset(fieldset, main_message, Object.assign(Object.assign(main_data, serializator(_form)), { [i]: x }))
                    }
                });
            }

            return descript;
        },
        methods,
        reRender: (data) => {
            messageToFieldset(fieldset, message, data)
        }
    }


    _bind['right'] = xright.bind(_bind)

    function insertData(html, data) {
        if (data) {
            if (typeof html === 'string' && html.indexOf("$") != -1)
                for (let i of Object.keys(data)) {
                    html = html.split('$' + i).join(data[i])
                }
        }
        return html;
    }

    function appy_methods() {
        if (methods)
            setTimeout(() => {
                for (let method of Object.keys(methods)) {
                    const qs = `.${window.classList.toString().replace(' ', ' .')} button[onclick*="${method}"]`;

                    const buttons_list = document.querySelectorAll(qs);
                    for (let i = 0; i < buttons_list.length; i++) {

                        _bind['button'] = {
                            loading() {
                                buttons_list[i].classList.toggle('load');
                            },
                            element: buttons_list[i]
                        }

                        // _bind['button'] = ;
                        const f = methods[method].bind(_bind)

                        const mtd = function (e) {
                            e.preventDefault();
                            let cdata = buttons_list[i].getAttribute('onclick').substr(method.length);
                            eval('f' + cdata)
                        }.bind(_bind);

                        buttons_list[i].onclick = mtd;
                    }
                }
            }, 100);
    }

    function toHtml(to, data) {
        to.innerHTML = data
        appy_methods()
    }


    function messageToFieldset(to, message, data) {
        // console.log('messageToFieldset',  to, message, data);
        if (data instanceof Promise) {
            // console.log(message, 'data Promise', data);
            to.innerHTML = '<div class="load">Подождите...</div>';
            data.then(itm => {
                if ('clone' in itm)
                    return itm.clone().json().catch(() => itm.text())
                else
                    return itm
            }).then(itm => {
                _bind['fetchData'] = itm;
                messageToFieldset(to, message, itm)
            });
            return false;
        } else if (typeof data == 'function') {
            // console.log(message, 'data function', data);
            _bind['functionData'] = data;
            messageToFieldset(to, message, data())
            return false;
        }

        if (message instanceof Promise) {
            // console.log('message Promise', message, data);
            to.innerHTML = '<div class="load">Подождите...</div>';
            message.then(itm => {
                if ('clone' in itm)
                    return itm.clone().json().catch(() => itm.text())
                else
                    return itm
            }).then(itm => {
                _bind['fetchMessage'] = itm;
                messageToFieldset(to, itm, data)
            });
            return false;
        } else if (typeof message == 'function') {
            // console.log('message function', message, data);
            message = message.bind(_bind)
            _bind['functionMessage'] = message;
            messageToFieldset(to, message(data), data)
            return false;
        } else if (message instanceof HTMLElement) {
            // console.log('message HTMLElement', message, data);
            to.innerHTML = '';
            to.appendChild(message)
        } else {
            // console.log('message else', message, data);
            toHtml(to, insertData(message, data))
        }
    }

    if (main_message)
        messageToFieldset(fieldset, main_message, main_data)

    const window = document.createElement("div")
    window.classList.add('window_h12nbsx9dk23m32ui4948382')
    window.appendChild(close_panel)
    if (style) {
        if (style.color) window.style.color = style.color
        if (style.background) window.style.background = style.background
        if (style.width) window.style.maxWidth = `${style.width}px`
    }



    const form_panel = document.createElement("div")
    form_panel.classList = ['form_panel_h12nbsx9dk23m32ui4948382']

    if (navigator){
        // _form.style.display = 'flex'
        form_panel.appendChild(navigator)
        // fieldset.style.flex = '1'
    }

    form_panel.appendChild(_form)
    form_panel.appendChild(_formRight)

    window.appendChild(form_panel)


    const bottomButtons = document.createElement("div")
    if (buttons)
        bottomButtons.appendChild(getButtons(main_buttons))

    window.appendChild(bottomButtons)
    _modelDi.appendChild(window)

    _modelDi.onscroll = function (e) {
        hahc_xauto_scrollx42ex[title] = _modelDi.scrollTop
    }





    function getButtons(buttons, title, report = true) {
        let result = document.createElement("div")
        result.classList.add('buttons_panel_h12nbsx9dk23m32ui4948382')
        result.appendChild(document.createElement("div"))


        if (title) {
            const titlex = document.createElement("div")
            titlex.innerText = title
            titlex.classList = ['dialogTitle_h12nbsx9dk23m32ui4948382']

            result.appendChild(titlex)
        } else {
            result.style.justifyContent = "flex-end"
        }


        if (typeof buttons == 'object') {
            for (let title of Object.keys(buttons)) {
                let btn = document.createElement('button')
                btn.innerHTML = title

                btn.onclick = () => {
                    if (report)
                        if (!_form.reportValidity()) return false;

                    _bind['button'] = {
                        loading(f = true) {
                            if (f)
                                btn.classList.add('load');
                            else
                                btn.classList.remove('load');
                        },
                        element: btn
                    }
                    // _bind['button'] = ;
                    const f = buttons[title].bind(_bind)
                    f(serializator(_form))
                }

                result.appendChild(btn)
            }
        } else {

        }
        return result
    }





    document.body.appendChild(_modelDi)

    if (title in hahc_xauto_scrollx42ex)
        _modelDi.scrollTop = hahc_xauto_scrollx42ex[title]


}