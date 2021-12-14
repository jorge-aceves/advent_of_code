def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

file_name = "input.txt"
all_arr = read_file(file_name).split("\n")
folds = []
arr = []
all_arr.each do |line|
  next if line.size == 0
  if line.start_with?("fold")
    folds.push(line)
  else
    arr.push(line)
  end
end

arr = arr.map{|e| e.split(",").map(&:to_i)}
max_x = arr.max{|a,b| a[0] - b[0]}[0]
max_y = arr.max{|a,b| a[1] - b[1]}[1]

dots = {}

folds.each do |fold|
  new_arr = []
  dots = {}
  mid = fold.split("=").last.to_i
  is_x = false
  if fold.start_with? "fold along x"
    is_x = true
  end
  max_x = is_x ? mid : max_x
  max_y = is_x ? max_y : mid

  arr.each do |line|
    output = line
    x = output.first
    y = output.last
    if is_x
      x = mid - (x % mid) if x > mid
      if x == mid
        x = 0
      end
    else
      y = mid - (y % mid) if y > mid
      if y == mid
        y = 0
      end
    end
    if !dots["#{x},#{y}"]
      dots["#{x},#{y}"] = 1
      new_arr.push([x, y])
    end
  end
  arr = new_arr
end

map = [].fill(0...max_y){|e| [] }
map = map.map {|r| r.fill('.', 0...max_x)}

dots.keys.each do |k|
  x = k.split(",").first.to_i
  y = k.split(",").last.to_i
  map[y][x] = "#"
end

map.each {|r| p r.join}