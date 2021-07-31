new Vue({
    el:"#ATM",
    data:{
        nyuryokugaku:0,
        zandaka:0,
        logs: [
            {
              date: new Date("2021-07-23T12:00:00"),
              type: "入金",
              money: Number(this.nyuryokugaku),
            },
            {
              date: new Date("2021-07-23T13:00:00"),
              type: "出金",
              money: Number(this.nyuryokugaku)
            }
          ],
    },
    methods:{
        nyukin:function(){
            this.zandaka +=Number(this.nyuryokugaku)
            this.logs.push(this.logs[0])
        },
        shukkin:function(){
            this.zandaka -=Number(this.nyuryokugaku)
            this.logs.push(this.logs[1])
        },
    }
})