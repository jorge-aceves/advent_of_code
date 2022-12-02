def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end


file_name = "input.txt"
arr = read_file(file_name).split("\n")
res = []
total = 0
arr.each do |line|
  points = line.split(" -> ")
  p1 = points[0].split(",").map(&:to_i)
  p2 = points[1].split(",").map(&:to_i)
  if p1[0] == p2[0]
    x = p1[1] < p2[1] ? p1[1] : p2[1]
    y = p1[1] < p2[1] ? p2[1] : p1[1]
    for i in x..y
      res[p1[0]] ||= {}
      res[p1[0]][i] ||= 0
      total += 1 if res[p1[0]][i] == 1
      res[p1[0]][i] += 1
    end
  elsif p1[1] == p2[1]
    x = p1[0] < p2[0] ? p1[0] : p2[0]
    y = p1[0] < p2[0] ? p2[0] : p1[0]
    for i in x..y
      res[i ] ||= {}
      res[i][p1[1]] ||= 0
      total += 1 if res[i][p1[1]] == 1
      res[i][p1[1]] += 1
    end
  else
    x1 = p1[0]
    y1 = p1[1]
    x2 = p2[0]
    y2 = p2[1]
    if p1[0] > p2[0]
      x1 = p2[0]
      y1 = p2[1]
      x2 = p1[0]
      y2 = p1[1]
    end
    start = y1
    for i in x1..x2
      res[i] ||= {}
      res[i][start] ||= 0
      total += 1 if res[i][start] == 1
      res[i][start] += 1
      start += y1 < y2 ? 1 : -1
    end
  end
end
p total