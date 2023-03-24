describe('Primeiro Teste', () => {
    it('Acessar o menu forms', async () => {

        const seletor = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const botao_frase = await $(`android=${seletor}`)


        await $('~Forms').click()
        await $('~text-input').setValue('Exercício Módulo 16')
        expect (await $('~text-input')).toBeDisplayed()
        await $('~Dropdown').click()
        await botao_frase.click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await $('~button-Active').click()
                
    });
    
});