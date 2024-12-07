class Helpers {


    closeDialog(ind = null) {
        this.activeGroup = 'Main';
        this.clearDialog(ind);
        this.backdrop.alpha = 0;
        this.skipButton.destroy();
        this.skipButton = null;
    }

}
