class LikeButton {
    
    constructor(private noOfLikes:number, private selected:boolean) {

    }

    get NoOfLikes() {
        return this.noOfLikes;
    }

    set NoOfLikes(n:number) {
        this.NoOfLikes = n;
        if (n < 0) {
            throw new console.error("Number can't be less than 1");
        }
    }

    get Selected() {
        return this.selected;
    }

    set Selected(s:boolean){
        this.selected = s;
    }

    clicked(){
        this.noOfLikes += (this.selected) ? 1 : -1;
        this.selected = !this.selected;
    }
}