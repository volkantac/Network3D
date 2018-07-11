library("rjson")

getwd()
setwd("C:/Users/VOLTAC/Desktop/DEMO/3d-heatmap/data")
a=read.csv(file= "hourlyData.csv",header = TRUE, sep=";")
write.csv(a,"hourlyIST.csv", row.names = FALSE)


a=a[,-1]


View(a)
a$site_sector_id=as.character(a$site_sector_id)

a$coordinates=paste(a$lng,a$lat,sep=",")
a=a[,-(1:2)]
colnames(a)= c("lenngg","coordinates")




b=toJSON(split(a, 1:nrow(a)))

jsonlite::write_json(x = b, path = "bjson.json")

write.csv(a,"aaa.csv",row.names = FALSE)
