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
total = 0
is_x = false
mid = folds.first.split("=").last.to_i
if folds.first.start_with? "fold along x"
  is_x = true
end
dots = 0
dots_map= {}
arr.each do |line|
  output = line.split(",")
  x = output.first.to_i
  y = output.last.to_i
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
  if !dots_map["#{x}#{y}"]
    p "point"
    p "#{x},#{y}"
    dots_map["#{x}#{y}"] = 1
    dots+=1
  end
end
p dots